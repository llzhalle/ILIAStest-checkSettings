(function () {

  // by: @semelina | llz uni halle with the friendly support of chatGPT
  // for ILIAS 7.x (fully) and 8.x (only on first settings page)
  // version 2.0 | 2024-04-09

  // tl;dr howto: Look through the list of settings and change the number on the right according to what you want. 
  // Your options from 1-5 are explained directly above the settings list

  ///////////////////////////////////
  ///// AVAILABLE SETTINGS /////////
  /////////////////////////////////

  // Settings in the format ['Name', '#id', CheckNr],
  // Names can be changed if needed: they are displayed in the check output
  // IDs are the id-selector of the html element: change only if you know what you are doing
  // CheckNr is the number of the check this element gets: change this according to your specifications

  /////////////////////////////////////////////////////
  // 1 = required: warning if not set ////////////////
  // 2 = forbidden: warning if set //////////////////
  // 3 = info if set: displays settingname if set //
  // 4 = info value: displays given value /////////
  // 5 = skip (do not check in 1-4) //////////////
  ///////////////////////////////////////////////

  const iliasData = [
    ['Beschreibung', '#description', 4],
    ['Fragenpools', '#use_pool_1', 5],
    ['Fragen nur in Klausur', '#use_pool_0', 5],
    ['Feste Fragen', '#question_set_type_FIXED_QUEST_SET', 3],
    ['Zufall', '#question_set_type_RANDOM_QUEST_SET', 3],
    ['Wiedervorlage', '#question_set_type_DYNAMIC_QUEST_SET', 3],
    ['Namentlich', '#anonymity_0', 1],
    ['Anonym', '#anonymity_1', 2],
    ['Online', '#online', 1],
    ['Verfügbarkeit', '#activation_type', 5],
    ['Verfügbarkeit Start', 'access_period[start]', 5],
    ['Verfügbarkeit sichtbar', '#activation_visibility', 5],
    ['Einleitung aktiv', '#intro_enabled', 5],
    ['Einleitung Inhalt', '#introduction', 5],
    ['Klausureigenschaften', '#showinfo', 2],
    ['Startzeit', '#starting_time', 2],
    ['Endzeit', '#ending_time', 2],
    ['Passwort Set', '#password_enabled', 1],
    ['Passwort', '#password', 4],
    ['feste Teilnehmer', '#fixedparticipants', 3],
    ['begrenzte TN-Zahl', '#limitUsers', 2],
    ['Durchlaeufe Begrenzt', '#limitPasses', 1], // there's an additional check of the number of tries later, and can be customized in the function 'durchlaufCheck'
    ['Durchlaeufe', '#nr_of_tries', 5], // see right above and far below
    ['Durchlaeufe nach Bestehen verhindern', '#block_after_passed', 5],
    ['Wartezeit', '#pass_waiting_enabled', 2],
    ['Bearbeitungsdauer begrenzt', '#chb_processing_time', 1],
    ['Bearbeitungsdauer', '#processing_time', 4], // if you have 4 here, remember to also set 'Bearbeitungsdauer begrenzt' to 1 (otherwise it shows the value regardless of parent status)
    ['Kiosk aktiv', '#kiosk', 1],
    ['Kiosk Titel', '#kiosk_options_kiosk_title', 1],
    ['Kiosk Name', '#kiosk_options_kiosk_participant', 1],
    ['Pruefungsnummer', '#examid_in_test_pass', 5],
    ['Anzeige Titel und Punkte', '#title_output_0', 1],
    ['Anzeige nur Titel', '#title_output_1', 2],
    ['Anzeige weder noch', '#title_output_2', 2],
    ['Autosave aktiv', '#autosave', 1],
    ['Autosave Zeit', '#autosave_ival', 5], // if you have 4 here, remember to also set 'Autosave aktiv' to 1 (otherwise it shows the value regardless of parent status)
    ['Fragen mischen', '#chb_shuffle_questions', 3],
    ['Loesungshinweise', '#offer_hints', 2],
    ['Direkte Rueckmeldung', '#instant_feedback_enabled', 2],
    ['Rueckmeldung Punkte', '#instant_feedback_contents_instant_feedback_points', 5],
    ['Rueckmeldung Korrekt', '#instant_feedback_contents_instant_feedback_generic', 5],
    ['Rueckmeldung Unterschiedlich', '#instant_feedback_contents_instant_feedback_specific', 5],
    ['Rueckmeldung Loesung', '#instant_feedback_contents_instant_feedback_solution', 5],
    ['Auslöser Rückmeldung TN', '#instant_feedback_trigger_0', 5],
    ['Auslöser Rückmeldung bei Antwort', '#instant_feedback_trigger_1', 5],
    ['Festschreiben Nein', '#answer_fixation_handling_none', 1],
    ['Festschreiben Bei Rueckmldg', '#answer_fixation_handling_instant_feedback', 2],
    ['Festschreibung bei Folgefrage', '#answer_fixation_handling_followup_question', 2],
    ["Festschreiben Bei Rueckmldg Oder Wechsel", "#answer_fixation_handling_ifb_or_fuqst", 2],
    ["Verpflichtende Fragen", "#obligations_enabled", 3],
    ["Sonderzeichen Plattformsettings", "#char_selector_availability_0", 5],
    ["Sonderzeichen anzeigen", "#char_selector_availability_1", 2],
    ["Sonderzeichen nicht anzeigen", "#char_selector_availability_2", 5],
    ["Vorherige Loesung", "#chb_use_previous_answers", 2],
    ["Test unterbrechen", "#chb_show_cancel", 2],
    ["Nichtbeantwortete bleiben", "#postpone_0", 1],
    ["Nichtbeantwortete ans Ende", "#postpone_1", 2],
    ["Fragenliste zeigen", "#list_of_questions", 1],
    ["Fragenliste am Anfang", "#list_of_questions_options_chb_list_of_questions_start", 2],
    ["Fragenliste am Ende", "#list_of_questions_options_chb_list_of_questions_end", 2],
    ["Fragenliste Beschreibung", "#list_of_questions_options_chb_list_of_questions_with_description", 2],
    ["Fragen markieren", "#chb_show_marker", 1],
    ["Uebersicht gegebener Antworten", "#enable_examview", 2],
    ['Abschließende Bemerkung', '#showfinalstatement', 5],
    ['Weiterleitung', '#redirection_enabled', 5],
    ['Weiterleitung immer', '#redirection_mode_1', 5],
    ['Weiterleitung aktive Prüfsicht', '#redirection_mode_2', 5],
    ['Weiterleitung URL', '#redirection_url', 5],
    ['Signatur', '#sign_submission', 5],
    ['Benachrichtigung', '#mailnotification', 5],
    ['Benachrichtigung nur Name und Datum', '#mailnotification_content_1', 5],
    ['Benachrichtigung komplettes Ergebnis', '#mailnotification_content_2', 5],
    ['Benachrichtigung pro Durchlauf', '#mailnottype', 5],
    //// Settings on 'Auswertung' Page
    ["Teilpunkte", "#count_system_0", 1],
    ["Alles oder Nichts", "#count_system_1", 5],
    ["Leer nicht speichern", "#mc_scoring_0", 1],
    ["Leer speichern", "#mc_scoring_1", 5],
    ["Negative bei 0 kappen", "#score_cutting_0", 1],
    ["Negativ Gesamtergebnis", "#score_cutting_1", 5],
    ["Letzten Durchlauf werten", "#pass_scoring_0", 3],
    ["Besten Durchlauf werten", "#pass_scoring_1", 3],
    ["Ergebnisanzeige", "#results_access_enabled", 2],
    ['Ergebnisanzeige sofort', '#results_access_setting_2', 5],
    ['Ergebnisanzeige nach Durchlauf', '#results_access_setting_1', 5],
    ['Ergebnisanzeige nach Bestehen', '#results_access_setting_4', 5],
    ['Ergebnisanzeige ab Datum', '#results_access_setting_3', 5],
    ['Ergebnisanzeige zum Datum', '#reporting_date', 5],
    ['Ergebnistabelle mit anzeigen', '#pass_details', 5],
    ['Bestanden Status anzeigen', '#grading_status', 5],
    ['Note anzeigen', '#grading_mark', 5],
    ["Durchlauf Loeschen verboten", "#pass_deletion_allowed_0", 1],
    ["Durchlauf Loeschen erlaubt", "#pass_deletion_allowed_1", 5],
    ["Bewertete Antworten", "#solution_details", 2],
    ['Beste Lösung', '#print_bs_with_res', 5],
    ['Rückmeldungen', '#solution_feedback', 5],
    ['Inhalte zur Wiederholung', '#solution_suggested', 5],
    ['Druckbare Antworliste', '#solution_printview', 5],
    ["Zeige Platzierung", "#highscore_enabled", 2],
    ['Platzierung eigener Rang', '#highscore_mode_1', 5],
    ['Platzierung Bestenliste', '#highscore_mode_2', 5],
    ['Platzierung Rang und Liste', '#highscore_mode_3', 5],
    ['Länge Bestenliste', '#highscore_top_num', 5],
    ['Platzierung ohne Namen', '#highscore_anon', 5],
    ['Platzierung mit Datum', '#highscore_achieved_ts', 5],
    ['Platzierung mit Punkten', '#highscore_score', 5],
    ['Platzierung mit Prozent', '#highscore_percentage', 5],
    ['Platzierung Lösungshinweise', '#highscore_hints', 5],
    ['Platzierung Bearbeitungsdauer', '#highscore_wtime', 5],
    ['Platz für Unterschrift', '#solution_signature', 5],
    ["Zeige Pruefnr", "#examid_in_test_res", 5]
  ] // end of settings data

  ///////////////////////////////////
  /////// THINGS WE NEED ///////////
  /////////////////////////////////

  // If the number of tries is supposed to be limited, set desired number here
  const tries = 1;

  // TEMPLATES 
  // result types
  var resultsNope = ''; // Warnings shown directly
  var resultsInfo = ''; // Infos shown directly
  var resultsOkSet = ''; // check for required setting
  var resultsOkNotSet = ''; // check for forbidden setting
  var resultsError = ''; // errors in checks

  // result containers
  var resultsErrorShow = ''; // area to display error messages if there are any
  var resultsInfoShow = ''; // we'll need this later

  // result templates
  const okshow = '<span class="ok">\u2713 </span>';
  const oknotset = '<span class="ok">&cir; </span>';
  const nope = '<span class="nope">\u2A2F </span> ';
  const infoSet = '&bullet; ';
  const infoVal = '&bullet; ';
  const noInfo = '<span class="comment">Keine informativen Einstellungen auf dieser Seite.</span>';

  // page check
  const settingsFirstPage = document.querySelector("#subtab_general");
  const settingsThirdPage = document.querySelector("#subtab_scoring");

  // function for checking of first and third settings page of ILIAS tests
  function isValidPage() {

    // Check if active class
    const isValid = settingsFirstPage?.classList.contains('active') ||
      settingsThirdPage?.classList.contains('active');

    return isValid;

  }


  //////////////////////////////////
  //////// CHECK FUNCTIONS ////////
  ////////////////////////////////

  // check #1 for required settings
  function checkOne(data) {
    try {
      let { settingName, settingID, setting } = data;
      if (setting) {
        if (
          ((setting.type === "checkbox" || setting.type === "radio") && setting.checked) || // if it has a checked=checked attribute it's a radiobutton or checkbox
          (setting.type === "text" && setting.value.trim() !== "") || // or if it's an element with type=text, it shouldn't be empty
          (setting.tagName.toLowerCase() === "textarea" && setting.value.trim() !== "") // or if it's a textarea, it also shouldn't be empty
        ) {
          resultsOkSet += `${okshow}${settingName} <br>`;
        } else {
          resultsNope += `${nope}${settingName}: nicht gesetzt <br>`;
        }
      }
      else {
      }
    } catch (error) {
      resultsError += `!!! error in check #1 for ${data.settingName}: ` + error.message + `<br>`;
    }
  }

  // check #2 for forbidden settings
  function checkTwo(data) {
    try {
      let { settingName, settingID, setting } = data;
      if (setting) {
        if (
          ((setting.type === "checkbox" || setting.type === "radio") && !setting.checked) || // if it is radiobutton or checkbox and doesn't have a checked=checked attribute 
          (setting.type === "text" && setting.value.trim() == "") || // or if it's an element with type=text, it should be empty
          (setting.tagName.toLowerCase() === "textarea" && setting.value.trim() == "") // or if it's a textarea, it also should be empty
        ) {
          resultsOkNotSet += `${oknotset}${settingName} <br>`;
        } else {
          resultsNope += `${nope}${settingName}: darf nicht gesetzt sein <br>`;
        }
      } else {
      }
    } catch (error) {
      resultsError += `!!! error in check #2 for ${data.settingName}: ` + error.message + `<br>`;
    }
  }

  // check #3 and report if set
  function checkThree(data) {
    try {
      let { settingName, settingID, setting } = data;
      if (setting) {
        if (
          ((setting.type === "checkbox" || setting.type === "radio") && setting.checked) || // if it is radiobutton or checkbox and is checked 
          (setting.type === "text" && setting.value.trim() !== "") || // or if it's an element with type=text, which is not empty
          (setting.tagName.toLowerCase() === "textarea" && setting.value.trim() !== "") // or if it's a textarea, also not empty
        ) {
          resultsInfo += `${infoSet}${settingName}<br>`;
        } else {
          resultsInfo += ``;
        }
      } else {
      }
    } catch (error) {
      resultsError += `!!! error in check #3 for ${data.settingName}: ` + error.message + `<br>`;
    }
  }

  // check #4 and return info values

  function checkFour(data) {
    try {
      let { settingName, settingID, setting } = data;
      if (setting) {
        if ((setting.type === "checkbox" || setting.type === "radio") && setting.checked) {// if it is radiobutton or checkbox and has a checked=checked attribute 
          resultsInfo += `${infoSet}${settingName} ist aktiv<br>`;
        } else if ((setting.type === "text" && setting.value.trim() !== "") || // or if it's an element with type=text, it shouldn't be empty
          (setting.tagName.toLowerCase() === "textarea" && setting.value.trim() !== "")) // or if it's a textarea, it also shouldn't be empty
        {
          // get the value, clean from html code and only show the first characters if its long
          let settingValue;
          const maxLength = 100;
          if (setting.value.replace(/<[^>]*>?/gm, '').length < maxLength) {
            settingValue = setting.value.replace(/<[^>]*>?/gm, '')
          } else {
            settingValue = `<i>${setting.value.replace(/<[^>]*>?/gm, '').substring(0, maxLength)}[…] </i>`;
          }

          resultsInfo += `${infoSet} ${settingName}: ${settingValue}<br>`;
        } else {
          resultsInfo += ``;
        }
      } else {
      }
    } catch (error) {
      resultsError += `!!! error in check #4 for ${data.settingName}: ` + error.message + `<br>`;
    }
  }

  // Check for number of tries set to your desired number (number can be changed below)
  // If you don't want to check for a specific number of tries, uncomment function execution at the end of the script
  function durchlaufCheck() {
    const limitPasses = document.querySelector("#limitPasses");
    const DurchValue = document.querySelector("#nr_of_tries");

    try {
      if (limitPasses.checked) {
        const DurchValueNr = DurchValue.value;
        if (DurchValueNr == tries) {
          resultsOkset += `${okshow} Durchläufe: ${tries} <br>`;
        } else {
          resultsNope += `${nope} Durchläufe nicht auf ${tries} begrenzt (aktuell ${DurchValueNr})<br>`;
        }
      } else {
        resultsNope += `${nope} Durchläufe nicht begrenzt<br>`;
      }
    } catch (error) {
      resultsError += `${nope} !!! error in Durchlauf-Check <br>`;
    }
  }


  ////////////////////////////////
  /////////// OUTPUT ////////////
  //////////////////////////////


  // how to built the result popup
  function generatePopup() {

    // if no problems found, change output 
    if (resultsNope === null || resultsNope === '') {
      resultsNope += `${okshow} Alle Einstellungen ok`;
    } else {
      resultsNope += ``;
    }

    // if there are no info-elements, change output
    if (resultsInfo === null || resultsInfo === '') {
      resultsInfoShow = noInfo;
    } else {
      resultsInfoShow = resultsInfo;
    };

    // only show error area if there are errors 
    if (resultsError === '') {
      var resultsErrorshow = '';
    } else {
      var resultsErrorshow = `  <section id="error">
      <h2>Error</h2>
      <p>${resultsError}</p>
    </section>`;
    }


    // Create a new div element to display the results
    var resultsDiv = document.createElement('main');
    resultsDiv.innerHTML = `
      <h1>ILIAS Check der Klausureinstellungen</h1>
      <section id="visibleResults">
          <h2>Abweichungen</h2>
          <p>${resultsNope}</p>
      </section>
      <section id="infoResults">
          <h2>Info</h2>
          <p>${resultsInfoShow}</p>
      </section>
      <details class="hiddenResults">
          <summary>Korrekt gesetzte Einstellungen</summary>
          <p>${resultsOkSet}</p>
      </details>
      <details class="hiddenResults">
          <summary>Korrekt NICHT gesetzte Einstellungen</summary>
          <p>${resultsOkNotSet}</p>
      </details>
      ${resultsErrorShow} 
  `;

    // Create a new button element for closing the popup window
    var closeButton = document.createElement('button');
    closeButton.textContent = 'Schließen';
    closeButton.addEventListener('click', function () {
      popup.close();
    });

    // Append the button to the resultsDiv
    resultsDiv.appendChild(closeButton);

    // Open a new window and create result html file
    var popup = window.open('', 'Results', 'height=550,width=550');
    popup.document.write('<html><head><title>Results</title>' +
      '<style>body {font-family: Arial, sans-serif; font-size: 0.9em; margin: 0 auto; background-color: rgb(240, 240, 240)}' +
      'h1 {font-size: 16px; margin: 0 0 1.5em 0; color: rgb(46, 46, 46);}' +
      'main section {margin: 0 0 1em 0;}' +
      'section p, details p {background-color: #fff; margin: 0; padding: 1em;}' +
      'section h2, summary {text-transform: uppercase; font-size: 14px; font-weight: normal; color: rgb(144, 144, 144); margin: 0;}' +
      'details {margin: 0.5em 0; padding: 0.5em; cursor: pointer;}' +
      'summary {background-color: #eee;}' +
      '.nope {color: red;}' +
      '.ok {color: rgb(129, 171, 46);}' +
      '.comment {color: #737373; font-size: 0.9em; font-style: italic; }' +
      'button {margin-top: 10px; padding: 0.75em; background-color: rgb(129, 171, 46); color: #fff; border: none; cursor: pointer; position: absolute; right: 20px; bottom: 20px;}</style></head><body></body></html>');
    popup.document.body.style.margin = '10px';
    popup.resizeTo(popup.innerWidth, popup.innerHeight);
    popup.document.body.appendChild(resultsDiv);
  }


  /////////////////////////////////
  ////////// MAIN EVENT //////////
  ///////////////////////////////

  function checkSettings() {
    if (isValidPage()) {
      iliasData.forEach(item => {
        const data = {
          settingName: item[0],
          settingID: item[1],
          itemCheckNr: item[2],
          setting: document.querySelector(item[1]),
        };

        // Checks based on the CheckNr value
        switch (data.itemCheckNr) {
          case 1:
            checkOne(data);
            break;
          case 2:
            checkTwo(data);
            break;
          case 3:
            checkThree(data);
            break;
          case 4:
            checkFour(data);
            break;
          case 5:
            // ignore those
            break;
          default:
            // Handle default case
            console.log("I bet you wish you'd set a default case now, don't you?");
            break;
        };

      });

      // check the passes
      durchlaufCheck();

      // create the popup
      generatePopup(resultsNope, resultsInfoShow, resultsOkSet, resultsOkNotSet, resultsErrorShow);

    } else
      alert('Du befindest dich nicht auf einer prüfbaren ILIAS Einstellungs-Seite!');
  }

  ///////////////////////////////
  /////////// DO IT ////////////
  /////////////////////////////

  // perform the checks
  checkSettings();



})();
