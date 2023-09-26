# legibold

Legibold is a Firefox extension which enables bionic reading on all web pages - that is, it bolds the beginning of each word to give your eyes useful anchor points, helping you to read faster!

## What is bionic reading?

Image courtesy of [Gadget Hacks](https://gadgethacks.com/how-to/read-faster-by-using-bionic-reading-your-android-0163892/):
![Example of bionic reading in action](https://img.gadgethacks.com/img/original/00/74/63788992121475/0/637889921214750074.jpg)

The variation of bolding this extension uses is:

- 1-2 character words: No bolding
- 3 character words: Bold first character
- 4-7 character words: Bold first 2 characters
- 8-10 character words: Bold first 3 characters
- 11-12 character words: Bold first 4 characters
- 13+ character words: Bold first 5 characters

## Installation

The extension is available on the [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/legibold/) website.

## How does it work?

Legibold works by targeting text elements (paragraphs and headings) and wrapping each word in a `<span>` tag. The extension then applies a CSS class to each span based on the length of the word, which bolds the first few characters of the word.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.