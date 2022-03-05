# action-logsnag

> Send logs to logsnag from your GitHub actions!

## Usage
```yml
name: Test

on:
  release:
    types:
      - published

jobs:
  publish:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@master

      - run: something to publish

      - uses: jsmrcaga/action-logsnag@v0.0.2
        with:
          token: ${{ secrets.LOGSNAG_TOKEN }}
          project: my-project
          channel: publish
          event: 'Published ${{ github.event.release.tag_name }}'
          description: 'Version ${{ github.event.release.tag_name }} published!'
          icon: 🎁
          notify: true

```
