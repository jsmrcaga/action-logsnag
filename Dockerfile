FROM node:17-alpine

COPY logsnag.js /logsnag.js

CMD ["node", "--experimental-fetch", "logsnag.js"]
