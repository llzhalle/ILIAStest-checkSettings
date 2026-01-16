(function () {

  // script version 1.0 | 2026-01-16
  // ILIAS Version 9.x
  // by: @semelina | llz uni halle with the friendly support of GPT

  // tl;dr howto: Look through the list of settings and change the number on the right according to what you want. 
  // Your options from 1-5 are explained directly above the settings list

  ///////////////////////////////////
  ///// AVAILABLE SETTINGS /////////
  /////////////////////////////////

  // Settings in the format ['Nicename', 'type', 'page', 'nameattribute', 'value (if radio)', CheckNr],
  // Names can be changed if needed: they are displayed in the check output
  // nameattributes are the selector of the html element: change only if you know what you are doing
  // values are only available for radio buttons: set to null for other types of elements
  // CheckNr is the number of the check this element gets: change this according to your specifications

  /////////////////////////////////////////////////////
  // 1 = required: warning if not set ////////////////
  // 2 = forbidden: warning if set //////////////////
  // 3 = info if set: displays settingname if set //
  // 4 = info value: displays given value /////////
  // 5 = skip (do not check in 1-4) //////////////
  ///////////////////////////////////////////////

const iliasData = [
// --- TESTGRUNDLAGEN ---
['Titel', 'text', 'generalSettings', 'form/input_0/input_1/input_2', null, 5],
['Beschreibung', 'text', 'generalSettings', 'form/input_0/input_1/input_3', null, 5],
['Feste Fragen', 'radio', 'generalSettings', 'form/input_0/input_4', 'FIXED_QUEST_SET', 5],
['Zufallstest', 'radio', 'generalSettings', 'form/input_0/input_4', 'RANDOM_QUEST_SET', 5],
['Ergebnisse mit Name', 'radio', 'generalSettings', 'form/input_0/input_5', '0', 5],
['Anonymer Test', 'radio', 'generalSettings', 'form/input_0/input_5', '1', 5],

// --- VERFÜGBARKEIT ---
['Online', 'checkbox', 'generalSettings', 'form/input_6/input_7', null, 5],
['Verfügbarkeit', 'checkbox', 'generalSettings', 'form/input_6/input_8', null, 5],
['Verfügbar ab', 'datetime', 'generalSettings', 'form/input_6/input_8/input_9', null, 5],
['Verfügbar bis', 'datetime', 'generalSettings', 'form/input_6/input_8/input_10', null, 5],
['Immer sichtbar', 'checkbox', 'generalSettings', 'form/input_6/input_8/input_11', null, 5],

// --- EINSTIEG ---
['Einleitung', 'checkbox', 'generalSettings', 'form/input_14/input_15', null, 5],
['Prüfungsbedingungen', 'checkbox', 'generalSettings', 'form/input_14/input_16', null, 5],

// --- ZUGANG ---
['Start', 'datetime', 'generalSettings', 'form/input_17/input_18/input_19', null, 5],
['Ende', 'datetime', 'generalSettings', 'form/input_17/input_18/input_20', null, 5],
['Passwort aktiv', 'checkbox', 'generalSettings', 'form/input_17/input_21', null, 5],
['Passwort', 'text', 'generalSettings', 'form/input_17/input_21/input_22', null, 5],
['Ausgewählte Teilnehmer', 'checkbox', 'generalSettings', 'form/input_17/input_23', null, 5],

// --- TESTDURCHLÄUFE / STEUERUNG ---
['Durchläufe begrenzt', 'checkbox', 'generalSettings', 'form/input_24/input_25', null, 5],
['Durchläufe', 'number', 'generalSettings', 'form/input_24/input_25/input_26', null, 5],
['Weitere Durchläufe verhindern', 'checkbox', 'generalSettings', 'form/input_24/input_25/input_27', null, 5],
['Wartezeit', 'checkbox', 'generalSettings', 'form/input_24/input_28', null, 5],
['Wartezeit Tage', 'number', 'generalSettings', 'form/input_24/input_28/input_29', null, 5],
['Wartezeit Stunden', 'number', 'generalSettings', 'form/input_24/input_28/input_30', null, 5],
['Wartezeit Minuten', 'number', 'generalSettings', 'form/input_24/input_28/input_31', null, 5],
['Bearbeitungsdauer set', 'checkbox', 'generalSettings', 'form/input_24/input_32', null, 5],
['Bearbeitungsdauer', 'number', 'generalSettings', 'form/input_24/input_32/input_33', null, 5],
['Bearbeitungsdauer zurücksetzen', 'checkbox', 'generalSettings', 'form/input_24/input_32/input_34', null, 5],
['Prüfungsansicht', 'checkbox', 'generalSettings', 'form/input_24/input_35', null, 5],
['Prüfungsansicht-Titel', 'checkbox', 'generalSettings', 'form/input_24/input_35/input_36', null, 5],
['Prüfungsansicht-Name', 'checkbox', 'generalSettings', 'form/input_24/input_35/input_37', null, 5],
['Test-ID anzeigen', 'checkbox', 'generalSettings', 'form/input_24/input_38', null, 5],

// --- FRAGEN/VERHALTEN ---
['Anzeige Titel und Punkte', 'radio', 'generalSettings', 'form/input_39/input_40', '0', 5],
['Anzeige nur Titel', 'radio', 'generalSettings', 'form/input_39/input_40', '1', 5],
['Anzeige nur Punkte', 'radio', 'generalSettings', 'form/input_39/input_40', '3', 5],
['Anzeige weder noch', 'radio', 'generalSettings', 'form/input_39/input_40', '2', 5],
['Autosave', 'checkbox', 'generalSettings', 'form/input_39/input_41', null, 5],
['Autosave Intervall', 'number', 'generalSettings', 'form/input_39/input_41/input_42', null, 5],
['Fragen mischen', 'checkbox', 'generalSettings', 'form/input_39/input_43', null, 5],
['Lösungshinweise', 'checkbox', 'generalSettings', 'form/input_39/input_44', null, 5],
['Direkte Rückmeldung', 'checkbox', 'generalSettings', 'form/input_39/input_45', null, 5],
['Rückmeldung Punkte', 'checkbox', 'generalSettings', 'form/input_39/input_45/input_46/input_47', null, 5],
['Rückmeldung richtige Lösung', 'checkbox', 'generalSettings', 'form/input_39/input_45/input_46/input_48', null, 5],
['Rückmeldung pro Antwort', 'checkbox', 'generalSettings', 'form/input_39/input_45/input_46/input_49', null, 5],
['Rückmeldung bestmögliche', 'checkbox', 'generalSettings', 'form/input_39/input_45/input_46/input_50', null, 5],
['Rückmeldungsauslöser Nutzer', 'radio', 'generalSettings', 'form/input_39/input_45/input_51', '0', 5],
['Rückmeldungsauslöser automatisch', 'radio', 'generalSettings', 'form/input_39/input_45/input_51', '1', 5],
['Antworten nicht festschreiben', 'radio', 'generalSettings', 'form/input_39/input_52', 'none', 5],
['Antworten bei Rückmeldung', 'radio', 'generalSettings', 'form/input_39/input_52', 'instant_feedback', 5],
['Antworten bei Folgefrage', 'radio', 'generalSettings', 'form/input_39/input_52', 'followup_question', 5],
['Antworten bei Rückmeldung ODER Folgefrage', 'radio', 'generalSettings', 'form/input_39/input_52', 'ifb_or_fuqst', 5],
['Verpflichtende Fragen', 'checkbox', 'generalSettings', 'form/input_39/input_53', null, 5],

// --- TEILNEHMERFUNKTIONEN ---
['Vorherige Lösung', 'checkbox', 'generalSettings', 'form/input_54/input_55', null, 5],
['Test unterbrechen', 'checkbox', 'generalSettings', 'form/input_54/input_56', null, 5],
['Nicht beantwortet bleiben', 'radio', 'generalSettings', 'form/input_54/input_57', '0', 5],
['Nicht beantwortet ans Ende', 'radio', 'generalSettings', 'form/input_54/input_57', '1', 5],
['Fragenliste', 'checkbox', 'generalSettings', 'form/input_54/input_58', null, 5],
['Übersicht Testdurchlauf', 'checkbox', 'generalSettings', 'form/input_54/input_59', null, 5],
['Übersicht vor erster Frage', 'checkbox', 'generalSettings', 'form/input_54/input_59/input_60', null, 5],
['Übersicht vor Ende', 'checkbox', 'generalSettings', 'form/input_54/input_59/input_61', null, 5],
['Übersicht Fragenbeschreibungen', 'checkbox', 'generalSettings', 'form/input_54/input_59/input_62', null, 5],
['Fragen markieren', 'checkbox', 'generalSettings', 'form/input_54/input_63', null, 5],

// --- TEST ABSCHLIESSEN ---
['Antwortübersicht', 'checkbox', 'generalSettings', 'form/input_64/input_65', null, 5],
['Abschließende Bemerkung', 'checkbox', 'generalSettings', 'form/input_64/input_66', null, 5],
['Weiterleitung', 'checkbox', 'generalSettings', 'form/input_64/input_67', null, 5],
['Weiterleitung Zielseite', 'radio', 'generalSettings', 'form/input_64/input_67/input_68', '1', 5],
['Weiterleitung Logout', 'radio', 'generalSettings', 'form/input_64/input_67/input_68', '3', 5],
['Weiterleitung Kiosk-Zielseite', 'radio', 'generalSettings', 'form/input_64/input_67/input_68', '2', 5],
['Weiterleitung URL', 'text', 'generalSettings', 'form/input_64/input_67/input_69', null, 5],
['Benachrichtigung', 'checkbox', 'generalSettings', 'form/input_64/input_70', null, 5],
['Benachrichtigung nur Name und Datum', 'radio', 'generalSettings', 'form/input_64/input_70/input_71', '1', 5],
['Benachrichtigung komplettes Ergebnis', 'radio', 'generalSettings', 'form/input_64/input_70/input_71', '2', 5],
['Benachrichtigung bei Einzeldurchläufen', 'checkbox', 'generalSettings', 'form/input_64/input_70/input_72', null, 5],

// --- ZUSATZFUNKTIONEN ---
['Info-Tab ausblenden', 'checkbox', 'generalSettings', 'form/input_73/input_74', null, 5],

  //////// AUSWERTUNGS-TAB ////////

// --- BEWERTUNG DES TESTS ---
['Teilpunkte', 'radio', 'scoringSettings', 'form/input_0/input_1', '0', 5],
['keine Teilpunkte', 'radio', 'scoringSettings', 'form/input_0/input_1', '1', 5],

['Frage mind 0 Punkte', 'radio', 'scoringSettings', 'form/input_0/input_2', '0', 5],
['Frage kann negative Punkte', 'radio', 'scoringSettings', 'form/input_0/input_2', '1', 5],

['Letzter Durchlauf', 'radio', 'scoringSettings', 'form/input_0/input_3', '0', 5],
['Bester Durchlauf', 'radio', 'scoringSettings', 'form/input_0/input_3', '1', 5],

// --- BEKANNTGABE DES TESTERGEBNISSES ---
['Testergebnis anzeigen', 'checkbox', 'scoringSettings', 'form/input_4/input_5', null, 5],
['Testergebnis sofort', 'radio', 'scoringSettings', 'form/input_4/input_5/input_6', '2', 5],
['Testergebnis nach Durchlauf', 'radio', 'scoringSettings', 'form/input_4/input_5/input_6', '1', 5],
['Testergebnis nach Bestehen', 'radio', 'scoringSettings', 'form/input_4/input_5/input_6', '4', 5],
['Testergebnis ab Datum', 'radio', 'scoringSettings', 'form/input_4/input_5/input_6', '3', 5],
['Ergebnisanzeige Datum', 'datetime', 'scoringSettings', 'form/input_4/input_5/input_6/input_10/input_11', null, 5],
['Bestanden anzeigen', 'checkbox', 'scoringSettings', 'form/input_4/input_5/input_12', null, 5],
['Note anzeigen', 'checkbox', 'scoringSettings', 'form/input_4/input_5/input_13', null, 5],
['Detaillierte Ergebnisse anzeigen', 'checkbox', 'scoringSettings', 'form/input_4/input_5/input_14', null, 5],
['Durchläufe löschen', 'checkbox', 'scoringSettings', 'form/input_4/input_5/input_15', null, 5],

// --- WEITERE OPTIONEN ---
['Bestmögliche Lösung', 'checkbox', 'scoringSettings', 'form/input_16/input_17', null, 5],
['Rückmeldungen', 'checkbox', 'scoringSettings', 'form/input_16/input_18', null, 5],
['Inhalte zur Wiederholung', 'checkbox', 'scoringSettings', 'form/input_16/input_19', null, 5],
['Druckbare Liste der Antworten', 'checkbox', 'scoringSettings', 'form/input_16/input_20', null, 5],
['Seiteninhalte ausblenden', 'checkbox', 'scoringSettings', 'form/input_16/input_21', null, 5],
['Platzhalter für Unterschrift', 'checkbox', 'scoringSettings', 'form/input_16/input_22', null, 5],
['Test ID in Ergebnissen', 'checkbox', 'scoringSettings', 'form/input_16/input_23', null, 5],

// --- GAMIFICATION ---
['Platzierungen', 'checkbox', 'scoringSettings', 'form/input_24/input_25', null, 5],
['Platzierungen Rang', 'radio', 'scoringSettings', 'form/input_24/input_25/input_26', '1', 5],
['Platzierungen Bestenliste', 'radio', 'scoringSettings', 'form/input_24/input_25/input_26', '2', 5],
['Platzierungen Rang und Bestenliste', 'radio', 'scoringSettings', 'form/input_24/input_25/input_26', '3', 5],
['Länge der Bestenliste', 'number', 'scoringSettings', 'form/input_24/input_25/input_27', null, 5],
['Keine Namen anzeigen', 'checkbox', 'scoringSettings', 'form/input_24/input_25/input_28', null, 5],
['Platzierung Datum', 'checkbox', 'scoringSettings', 'form/input_24/input_25/input_29', null, 5],
['Platzierung Punkte', 'checkbox', 'scoringSettings', 'form/input_24/input_25/input_30', null, 5],
['Platzierung Prozentwert', 'checkbox', 'scoringSettings', 'form/input_24/input_25/input_31', null, 5],
['Platzierung Lösungshinweise', 'checkbox', 'scoringSettings', 'form/input_24/input_25/input_32', null, 5],
['Platzierung Bearbeitungsdauer', 'checkbox', 'scoringSettings', 'form/input_24/input_25/input_33', null, 5],
];

  // If the number of tries is supposed to be limited, set desired number here
  const tries = 1;

  //////////////////////////////////////
  ////// RESULTS / TEMPLATES ///////////
  //////////////////////////////////////

  let resultsNope = ''; // Warnings shown directly
  let resultsInfo = ''; // Infos shown directly
  let resultsOkSet = ''; // check for required setting
  let countOkSet = 0; // count good checks
  let resultsOkNotSet = ''; // check for forbidden setting
  let countOkNotSet = 0; // count good not set checks
  let resultsError = ''; // errors in checks
  let resultsErrorShow = ''; // area to display error messages if there are any
  let resultsInfoShow = ''; // we'll need this later

  const okshow    = '<span class="ok">&#10003;</span>';   // ✓
  const oknotset  = '<span class="ok">&#9675;</span>';    // ○
  const nope      = '<span class="nope">&#10007;</span>'; // ✗
  const infoSet = '&bullet; ';
  const noInfo = '<span class="comment">Keine informativen Einstellungen auf dieser Seite.</span>';

  /////////////////////////////
  ///// Helper Functions /////
  ///////////////////////////

  /**
   * Detects on which page we are.
   * Returns string key or null if not detected.
   */
function detectSettingsPage() {
  if (document.querySelector('input[type="text"][name="form/input_0/input_1/input_2"]')) return 'generalSettings';
  if (document.querySelector('input[type="radio"][name="form/input_0/input_1"][value="0"]')) return 'scoringSettings';
  return null;
}

  function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

  //////////////////////////
  //// CHECK FUNCTIONS ////
  ////////////////////////

  /**
 * Holt Wert und Zustand eines Formularelements anhand der Daten-Konvention.
 * Gibt ein Objekt zurück: { found: boolean, value: any, checked: boolean }
 */
function getFieldState(data) {
  let el;
  switch (data.type) {
    case "checkbox":
      el = document.querySelector(`input[type="checkbox"][name="${data.fieldName}"]`);
      if (el) return { found: true, value: el.checked, checked: el.checked };
      break;
    case "radio":
      el = document.querySelector(`input[type="radio"][name="${data.fieldName}"][value="${data.value}"]`);
      if (el) return { found: true, value: el.checked, checked: el.checked };
      break;
    case "number":
    case "text":
    case "datetime":
      el = document.querySelector(`[name="${data.fieldName}"]`);
      if (el) return { found: true, value: el.value, checked: undefined };
      break;
    default:
      break;
  }
  return { found: false, value: undefined, checked: undefined };
}


  /**
   * Check #1 if a required setting is present/active.
   */
  function checkRequired(data) {
  const field = getFieldState(data);
  if (!field.found) return;

  let isSet = false;
  switch (data.type) {
    case "checkbox":
    case "radio":
      isSet = field.checked;
      break;
    case "number":
    case "text":
    case "datetime":
      isSet = field.value !== "" && field.value !== null && field.value !== undefined;
      break;
  }
  if (!isSet) {
    resultsNope += `${nope} ${escapeHtml(data.name)}: nicht gesetzt <br>`;
  } else {
    resultsOkSet += `${okshow} ${escapeHtml(data.name)} <br>`;
    countOkSet++;
  }
}

  /**
   * Check #2 if a forbidden setting is not set.
   */
  function checkForbidden(data) {
  const field = getFieldState(data);
  if (!field.found) return; 

  let isSet = false;
  switch (data.type) {
    case "checkbox":
    case "radio":
      isSet = field.checked;
      break;
    case "number":
    case "text":
    case "datetime":
      isSet = field.value !== "" && field.value !== null && field.value !== undefined;
      break;
  }

  if (isSet) {
    resultsNope += `${nope} ${escapeHtml(data.name)}: darf nicht gesetzt sein <br>`;
  } else {
    resultsOkNotSet += `${oknotset} ${escapeHtml(data.name)} <br>`;
    countOkNotSet++;
  }
}

 /**
   * Check #3 to display if the setting is set
   */
function checkInfoIfSet(data) {
  const field = getFieldState(data);
  if (!field.found) return;

  let isSet = false;
  switch (data.type) {
    case "checkbox":
    case "radio":
      isSet = field.checked;
      break;
    case "number":
    case "text":
    case "datetime":
      isSet = field.value !== "" && field.value !== null && field.value !== undefined;
      break;
  }

  if (isSet) {
    resultsInfo += `${infoSet}${escapeHtml(data.name)}<br>`;
  }
}

 /**
   * Check #4 to display the set value of a field
   */

const maxInfoValueLength = 100; // Maximal erlaubte Zeichen im Eintrag

function checkInfoValue(data) {
  const field = getFieldState(data);
  if (!field.found) return;

  if (["checkbox", "radio"].includes(data.type)) {
    if (field.checked) {
      resultsInfo += `${infoSet}${escapeHtml(data.name)}<br>`;
    }
  } else if (["number", "text", "datetime"].includes(data.type)) {
    if (field.value !== "" && field.value !== null && field.value !== undefined) {
      let value = String(field.value);
      if (value.length > maxInfoValueLength) {
        value = value.substring(0, maxInfoValueLength) + "…";
      }
      value = escapeHtml(value); 
      resultsInfo += `${infoSet}${escapeHtml(data.name)}: ${value}<br>`;
    }
  }
}


  ////////////////////////
  //// POPUP OUTPUT /////
  //////////////////////

  /**
   * Generates and opens the popup with results.
   */
  function generatePopup() {
    if (!resultsNope) resultsNope = `${okshow} Alle Einstellungen ok`;
    resultsInfoShow = resultsInfo ? resultsInfo : noInfo;
    resultsErrorShow = resultsError ? `<section id="error"><h2>Error</h2><p>${resultsError}</p></section>` : '';

    var resultsDiv = document.createElement('main');
    resultsDiv.innerHTML = `
      <h1>ILIAS Check der Klausureinstellungen</h1>
      <section id="visibleResults"><h2>Abweichungen</h2><p>${resultsNope}</p></section>
      <section id="infoResults"><h2>Info</h2><p>${resultsInfoShow}</p></section>
      <details class="hiddenResults"><summary>Korrekt gesetzte Einstellungen (${countOkSet})</summary><p>${resultsOkSet}</p></details>
      <details class="hiddenResults"><summary>Korrekt NICHT gesetzte Einstellungen  (${countOkNotSet})</summary><p>${resultsOkNotSet}</p></details>
      ${resultsErrorShow}
    `;

    var closeButton = document.createElement('button');
    closeButton.textContent = 'Schließen';
    closeButton.addEventListener('click', function () {
      popup.close();
    });
    resultsDiv.appendChild(closeButton);

    var popup = window.open('', 'Results', 'height=550,width=550');
    popup.document.write('<html><head><title>Results</title>' +
      '<style>body {font-family: Arial, sans-serif; font-size: 0.9em; margin: 0 auto; background-color: rgb(240,240,240);}' +
      'h1 {font-size: 16px; margin: 0 0 1.5em 0; color: rgb(46,46,46);}' +
      'main section {margin: 0 0 1em 0;}' +
      'section p, details p {background-color: #fff; margin: 0; padding: 1em; line-height: 1.4em;}' +
      'section h2, summary {text-transform: uppercase; font-size: 14px; font-weight: normal; color: rgb(144,144,144); margin: 0;}' +
      'details {margin: 0.5em 0; padding: 0.5em; cursor: pointer;}' +
      'summary {background-color: #eee;}' +
      '.nope {color: red;}' +
      '.ok {color: rgb(129, 171, 46);}' +
      '.comment {color: #737373; font-size: 0.9em; font-style: italic; }' +
      'button {margin-top: 10px; padding: 0.75em; background-color: rgb(129, 171, 46); color: #fff; border: none; cursor: pointer; position: absolute; right: 20px; bottom: 20px;}</style></head><body></body></html>');
    popup.document.body.style.margin = '10px';
    popup.document.body.appendChild(resultsDiv);
  }

  /////////////////////////////
  //// MAIN CHECK/CONTROL ////
  ///////////////////////////
  function checkSettings() {
    const pageKey = detectSettingsPage();
    if (!pageKey) {
      alert('Du befindest dich nicht auf einer überprüfbaren ILIAS Test-Einstellungs-Seite! ');
      return;
    }

// 
  // Mapping und Filterung für aktuelle Seite
  // 
  const currentItems = iliasData
    .map(item => ({
      name: item[0],
      type: item[1],
      pageKey: item[2],
      fieldName: item[3],
      value: item[4],
      desired: item[5]
    }))
    .filter(data => data.pageKey === pageKey);

  // 
  // Helper deklarieren
  // 
  const isRequired = (data) => data && data.desired === 1;

// ------------------------------
  // Einzelchecks (Haupt-Loop)
  // ------------------------------
  currentItems.forEach(data => {
    if (data.desired === 5) return;
    try {
      switch (data.desired) {
        case 1: checkRequired(data); break;
        case 2: checkForbidden(data); break;
        case 3: checkInfoIfSet(data); break;
        case 4: checkInfoValue(data); break;
        // case 5: skip
      }
    } catch (err) {
      console.error("Fehler in Check für", data.name, ":", err);
      resultsError += `${nope} Technischer Fehler bei ${escapeHtml(data.name)}: <code>${escapeHtml(err.message)}</code><br>`;
    }
  });

  // Special cross-check for "Durchläufe" after the main loop (only once per page)
  const begrenztData = currentItems.find(data => data.fieldName === 'form/input_24/input_25');
  const durchlaeufeData = currentItems.find(data => data.fieldName === 'form/input_24/input_25/input_26');

  if (isRequired(begrenztData) || isRequired(durchlaeufeData)) {
    const begrenztCheckbox = getFieldState({
      type: "checkbox",
      fieldName: 'form/input_24/input_25'
    });
    
    if (!begrenztCheckbox.found) {
      resultsError += `${nope} Durchläufe begrenzt: Feld nicht gefunden!<br>`;
    } else if (!begrenztCheckbox.checked) {
      resultsNope += `${nope} Durchläufe begrenzt: nicht gesetzt<br>`;
    } else {
      // Checkbox is active, now check the value
      const durchlaeufeField = getFieldState({
        type: "number",
        fieldName: 'form/input_24/input_25/input_26'
      });
      
      if (!durchlaeufeField.found) {
        resultsError += `${nope} Durchläufe: Feld nicht gefunden!<br>`;
      } else if (String(durchlaeufeField.value).trim() === String(tries)) {
        resultsOkSet += `${okshow} Durchläufe: ${durchlaeufeField.value} <br>`;
        countOkSet++;
      } else {
        resultsNope += `${nope} Durchläufe nicht auf ${tries} begrenzt (aktuell ${durchlaeufeField.value}) <br>`;
      }
    }
  }

  generatePopup();
}

  /////////////////////////////
  //// SCRIPT ENTRY-POINT ////
  ///////////////////////////

  checkSettings();

})(); 

