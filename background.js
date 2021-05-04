const filters = [
  details => details.url.indexOf("reddit.com") !== -1,
]

chrome.webRequest.onBeforeRequest.addListener(
  details => {
    console.log(details)
    return { cancel: filters.some(filter => filter(details)) }
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
)