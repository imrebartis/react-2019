import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://ee44ea3f7a544a9a80691806d51f1df1@sentry.io/1505841"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default { init, log };
