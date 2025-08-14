I love LinkedIn Learning, but I hate it when it starts playing videos on page load.  
Hence this extension. Hope it helps someone else.


# LinkedIn Learning Auto Pause

This Firefox extension automatically pauses videos under "https://www.linkedin.com/learning/" when page is loaded.


## Installation
1. Clone the repository:
   ```
   git clone https://github.com/efojs/pause-linkedin-learning.git
   ```

2. Navigate to the extension directory:
   ```
   cd pause-linkedin-learning
   ```

3. Load the extension in Firefox:
   - Open Firefox and go to `about:debugging#/runtime/this-firefox`.
   - Click on "Load Temporary Add-on".
   - Select the `manifest.json`.


## Usage

Once the extension is loaded, navigate to any page under "https://www.linkedin.com/learning/".  
The extension will find and click the "vjs-playing" button when the page is loaded.


## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.


## License

This project is licensed under the MIT License.