import axios from "axios";
import crypto from "crypto";
// import fs from "fs";
import FormData from "form-data";

// These parameters should be used for all requests
const SUMSUB_APP_TOKEN =
  "sbx:h65BzmO2PTUG8Wxbpi9hsYjZ.s98p5Bgzl4di5jp0Ym8V1T9sQFZKpf74"; // Example:  - Please don't forget to change when switching to production
const SUMSUB_SECRET_KEY = "LPeeAQh658aefwwxYZPO8Ub0uN5MJ8xc"; // Example:  - Please don't forget to change when switching to production
const SUMSUB_BASE_URL = "https://api.sumsub.com";

var config: any = {};
config.baseURL = SUMSUB_BASE_URL;

axios.interceptors.request.use(createSignature, function (error) {
  return Promise.reject(error);
});

let externalUserId: string, levelName: string, response: any;

// Make sure to specify 'Content-Type' header with value of 'application/json' if you're not sending a body for most of requests

// This function creates signature for the request as described here: https://docs.sumsub.com/reference/authentication

export function createSignature(config: any) {
  console.log("Creating a signature for the request...");

  var ts = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac("sha256", SUMSUB_SECRET_KEY);
  signature.update(ts + config.method.toUpperCase() + config.url);

  if (config.data instanceof FormData) {
    signature.update(config.data.getBuffer());
  } else if (config.data) {
    signature.update(config.data);
  }

  config.headers["X-App-Access-Ts"] = ts;
  config.headers["X-App-Access-Sig"] = signature.digest("hex");

  return config;
}

// These functions configure requests for specified method

// https://docs.sumsub.com/reference/create-applicant
export function createApplicant(externalUserId: string, levelName: string) {
  console.log("Creating an applicant...");

  var method = "post";
  var url = "/resources/applicants?levelName=" + encodeURIComponent(levelName);
  var ts = Math.floor(Date.now() / 1000);

  var body = {
    externalUserId: externalUserId,
  };

  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-App-Token": SUMSUB_APP_TOKEN,
  };

  config.method = method;
  config.url = url;
  config.headers = headers;
  config.data = JSON.stringify(body);

  return config;
}

// https://docs.sumsub.com/reference/add-id-documents
// export function addDocument(applicantId: string) {
//   console.log("Adding document to the applicant...");

//   var method = "post";
//   var url = `/resources/applicants/${applicantId}/info/idDoc`;
//   var filePath = "resources/sumsub-logo.png";

//   var metadata = {
//     idDocType: "PASSPORT",
//     country: "GBR",
//   };

//   var form = new FormData();
//   form.append("metadata", JSON.stringify(metadata));

//   var content = fs.readFileSync(filePath);
//   form.append("content", content, filePath);

//   /*
//   In case you'd like to upload images in base64 encoded string format:

//   var content = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUxpcSMudAGjmiIwdiEtdSIwdCMxdSMwdSMwdQGmlyMvdSFPfQOnmCMvdSMwdSMwdQGjmiMwdQGjmgGjmiMwdQGjmlncPbUAAAAUdFJOUwAw5lQRH0PM8CGpBhC81eBrftK5jzDo3gAAAAlwSFlzAAABwAAAAcABl8K+3QAAAuRJREFUeNrtm9typCAURXFEdMRLm6T//1fnId4qfUKDomLNWo8pwLOq7WwP0koBAAAAAAAAAAD8xzz+BPJIq377DMbeXaBBAAEEEIhHc3eBR7hAEkn2+Bhz9bmBcerH41Z3flqZ3MQRaBBAAAEEEEAAAQQQQAABBO7QCV/YHc/978IzEi8LH9EnN89Tid8n/z1XoEEAAQQQuPTf6AHp/Hlm/Z8BhQ1d/4PSyDfRiYgFmLb8yaBU8fVKqZKkFUotVCb8tU9ToBNKzRBAAAEEEhQY0hQY3gkMWfGNSpSxvGyQBXp1G3pRoLuPQIcAAgggcCnlSsCWieevM5M7q5Qd802vBuSv3aeT1vjNXY8zodfIVwVmI7/sAeuvUFa3X+UaV0lp6ov2f+YIXnspzLoHeoqKFAgggAACCCQhUJvvGDRtHIF2Wq8+SWDO7yyOwFyYrU4RqIRHjl0C2vO2QgABBBDYL2CFYm10AXEjW+qq5n66XjpFt8DSF86p1Xqmc8imgzbf5J1bwI7jjJ074XdPCN3U4S5z3QJdPo7TagOZW0B5Zqi0itSPV+IbgF078p4C4dsAYote7bvzEUAAAQR2CvTRBaRMroVhebhALixT78tfVyavsK870Z3QMUuY9ZmldiQXkn1BqwMR89d5Re2byeegPb8hK/ZtmyOAAAII7BWokheo3VPqVAXm/H2XfUImJyFgd8xNQaAKn4wAAggggICJI5CfXnc9drNVHIGpO67NOfVLnfA+gZO74w3PoGk9WCOAAAIIXNsdb+iEJdojBUw9UrgF2vx1x9o7D6d30W+642KqJSCn9fzxlid0s2/Wm/2qLWen+9jPoO5vg1Rit+uwBwIIIIDAFQK293snHF3A+e64D0hLnY/YOZMXquMEqterGTvVsik1te9vkuIIxO+Tfc8vHidwwGEPBBBAAIHzBKzzN6d1HIE21olpZyZLRNqLta5rXPfyAAAAAAAAAAAAAH7nHygtt70j9IRfAAAAV3pUWHRSYXcgcHJvZmlsZSB0eXBlIGlwdGMAAHic4/IMCHFWKCjKT8vMSeVSAAMjCy5jCxMjE0uTFAMTIESANMNkAyOzVCDL2NTIxMzEHMQHy4BIoEouAOoXEXTyQjWVAAAAAElFTkSuQmCC'
//   var ext = content.substring("data:image/".length, content.indexOf(";base64"));
//   var fileName = `image.${ext}`;
//   var base64Data = content.split(',')[1];
//   form.append('content', Buffer.from(base64Data, 'base64'), { fileName });
//   */

//   var headers = {
//     Accept: "application/json",
//     "X-App-Token": SUMSUB_APP_TOKEN,
//   };

//   config.method = method;
//   config.url = url;
//   config.headers = Object.assign(headers, form.getHeaders());
//   config.data = form;

//   return config;
// }

// https://docs.sumsub.com/reference/get-applicant-review-status
function getApplicantStatus(applicantId: string) {
  console.log("Getting the applicant status...");

  var method = "get";
  var url = `/resources/applicants/${applicantId}/status`;

  var headers = {
    Accept: "application/json",
    "X-App-Token": SUMSUB_APP_TOKEN,
  };

  config.method = method;
  config.url = url;
  config.headers = headers;
  config.data = null;

  return config;
}

// https://docs.sumsub.com/reference/generate-access-token
export function createAccessToken(
  externalUserId: string,
  levelName = "basic-kyc-level",
  ttlInSecs = 600
) {
  console.log("Creating an access token for initializng SDK...");

  var body = {
    userId: externalUserId,
    levelName: levelName,
    ttlInSecs: ttlInSecs,
  };

  var method = "post";
  var url = "/resources/accessTokens/sdk";

  var headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-App-Token": SUMSUB_APP_TOKEN,
  };

  config.method = method;
  config.url = url;
  config.headers = headers;
  config.data = JSON.stringify(body);

  return config;
}

// This section contains requests to server using configuration functions
// The description of the flow can be found here: https://docs.sumsub.com/reference/get-started-with-api

// Such actions are presented below:
// 1) Creating an applicant
// 2) Adding a document to the applicant
// 3) Getting applicant status
// 4) Getting access tokens for SDKs

export default async function main() {
  externalUserId = "random-JSToken-" + Math.random().toString(36).substr(2, 9);
  levelName = "basic-kyc-level";
  console.log("External UserID: ", externalUserId);

  response = await axios(createApplicant(externalUserId, levelName))
    .then(function (response) {
      console.log("Response:\n", response.data);
      return response;
    })
    .catch(function (error) {
      console.log("Error:\n", error.response.data);
    });

  const applicantId = response.data.id;
  console.log("ApplicantID: ", applicantId);

  // response = await axios(addDocument(applicantId))
  //   .then(function (response) {
  //     console.log("Response:\n", response.data);
  //     return response;
  //   })
  //   .catch(function (error) {
  //     console.log("Error:\n", error.response.data);
  //   });

  response = await axios(getApplicantStatus(applicantId))
    .then(function (response) {
      console.log("Response:\n", response.data);
      return response;
    })
    .catch(function (error) {
      console.log("Error:\n", error.response.data);
    });
}
