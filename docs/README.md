# ILIAStest-checkSettings

Script to compare the settings of an ILIAS test object against your predefined presets.

## Description

This script is designed as a bookmarklet to be used on the settings pages of ILIAS test objects. After configuring your default settings in the script, activating the bookmarklet displays a popup with quick feedback — including warnings and other useful information.

![Screenshot of the popup with the results of an ILIAS settings check.](checkSettings_Output.png)

## Prerequisites

- **ILIAS Compatibility**:
  - **Version for ILIAS 7 and 8**: Fully works for ILIAS 7.x, also partly on ILIAS 8.x (first 'general' settings page).
  - **Version for ILIAS 9**: This version has been completely reworked and is fully functional. However, please verify that the script targets the correct settings in your ILIAS installation, as the identifiers are incrementally numbered. If your configuration differs or includes additional settings, the identifiers may not match exactly.
- Your ILIAS instance may require adjustments to Content Security Policy (CSP) settings to allow execution of this script.

## Usage

1. **Save the Script**
   Save the script to a location that your ILIAS instance can access.
   Keep the direct link to the script available for future use.

2. **Configure Settings**
   Open the script and edit the list of settings at the top.
   Each setting for the general and scoring test settings pages is listed with:
   - a name
   - an identifier
   - additional technical details
   - a preference number (1–5; see below)

   The preference numbers indicate:
   1. **Required**: This setting should be enabled; you will get a warning if it is not.
   2. **Forbidden**: This setting must not be enabled; you will get a warning if it is.
   3. **Info if set**: No default state, but you want to be notified if set; shown in popup.
   4. **Info value**: Shows the current value (e.g., exam duration) in the popup.
   5. **Skip**: The script will ignore this setting.

The script also checks the maximum number of exam passes (default: 1 try). You can change this value below the settings list in the script.

3. **Create the Bookmarklet** 
   Create a new browser bookmark and set the following code as the bookmark's address. 
   Update the URL to point to your script (leave the `?timestamp=` part):
   
```
javascript:(function(){var timestamp = new Date().getTime(); var jsCode = document.createElement('script'); jsCode.setAttribute('src','https://path-to-file.de/checkSettings.js?timestamp=' + timestamp);document.body.appendChild(jsCode);})();
```

4. **Run the Settings Check** 
Navigate to the general or scoring ILIAS test settings page, then click on the bookmarklet. 
A popup will appear showing the results.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
Thanks to Christoph Scharnagl (FAU Erlangen-Nürnberg) for helping me find a way to make this work in ILIAS 9!
