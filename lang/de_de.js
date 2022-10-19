"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var T =
/*#__PURE__*/
function () {
  function T() {
    _classCallCheck(this, T);

    this.page_title = "Wahl-o-Mat";
    this.qa_modal_title = "Fragen &amp; Antworten";
    this.qa_modal_body = '<h4>Wer hat die Thesen erarbeitet?</h4>\
					<p>Studenten aus dem Studiengang Wirtschaftsinformatik - Application Management an der DHBW Lörrach, haben diese Thesen gemeinsam erarbeitet und durch Aussagen\
					von Studenten aus den Studiengängen die zur Wahl stehen bewertet.</p>\
\
					<p>Für die Stellungnahmen zu den Thesen sind die Studenten verantwortlich.</p>\
\
					<h4>Was macht der Wahl-o-Mat?</h4>\
					<p>Dieser Wahl-o-Mat soll dir bei der Wahl deines zukünftigen Studiengangs helfen.</p>\
\
					<h4>Wie werden die Punkte berechnet?</h4>\
					<p>Deine Antworten werden mit den vorgegebenen Antworten der befragten Studenten abgeglichen.</p>\
					<ul>\
						<li>Stimmt die Antwort überein, werden dem Studiengang 2 Punkte gutgeschrieben;</li>\
						<li>Weicht die Antwort leicht ab (Zustimmung/Neutral oder Neutral/Ablehnung), wird dem Studiengang 1 Punkt gutgeschrieben;</li>\
						<li>Sind die Antworten entgegengesetzt oder hat ein Student eine These nicht beantwortet, gibt es keine Punkte für den\
							Studiengang.\
						</li>\
					</ul>\
					<p>Eine These, die du übersprungen hast, wird nicht gewertet. Die erreichbare Höchstpunktzahl wird dadurch geringer.</p>\
					<p>Eine These, die doppelt gewichtet werden soll, wird doppelt gewichtet, das heißt, für sie wird die doppelte Punktzahl\
						gutgeschrieben (0/2/4). Dadurch können insgesamt mehr Punkte erreicht werden.</p>\
\
					<h4>Werden meine Antworten gespeichert?</h4>\
					<p>Nein. Alles läuft vollständig in deinem Browser ab.</p>';
    this.btn_qa_modal_close = "Schließen";
    this.swype_info_message_text = "Wische, um manuell zwischen Thesen zu wechseln";
    this.btn_swype_info_ok = "OK";
    this.start_subtitle = "Der Wahl-o-Mat ist eine Wahlentscheidungshilfe um den passenden Studiensgang für DICH zu finden!";
    this.start_explanatory_text =  '</h4><p>Der Study-O-Mat ist eine Auswahlhilfe für Studieninteressierte der IT-bezogenen Studienfächer an der DHBW Lörrach. Er besteht aus 35 Thesen die von den teilnehmenden Studiengängen bewertet wurden, entweder mit Zustimmung, Neutralität oder Ablehnung. Je nach inhaltlicher Relevanz der Thesen, kann der jeweilige Studiengang die Thesen als doppelt so wichtig oder halb so wichtig angeben. Die Begründung für die Antwort der Studiengänge kann der oder die Studieninteressierte nach dem Ergebnis in der Beschreibung zu den Thesen nachlesen. \n' +
        '</p><p>Aktuell haben folgende Studiengänge die Thesen aus ihrer Sicht bewertet: \n' +
        '</p><ul><li>Wirtschaftsinformatik – Application Management (WI-AM)\n' +
        '</li><li>Wirtschaftsinformatik – Data Science (WW-DS)\n' +
        '</li><li>Informatik (TIF)\n' +
        '</li><li>BWL – Digital Business Management (BWL-DBM)</ul> \n' +
		'<p>Dein Ergebnis ist keine Studienempfehlung, sondern bestimmt nur die Übereinstimmung deiner Antworten mit den möglichen Studiengängen.</p>';
    this.btn_start = "Wahl-o-Mat starten!";
    this.btn_start_show_qa = "Fragen &amp; Antworten";
    this.btn_toggle_thesis_more_text = "Erläuterung";
    this.btn_important = "These doppelt gewichten";
    this.btn_yes_text = "Zustimmung";
    this.btn_neutral_text = "Neutral";
    this.btn_no_text = "Ablehnung";
    this.btn_skip_text = "Überspringen";
    this.btn_mahlowat_show_start = "Zurück zur Startseite";
    this.btn_mahlowat_show_qa = "Fragen &amp; Antworten";
    this.btn_mahlowat_skip_remaining_theses = "Alle verbleibenden Thesen überspringen und aktuellen Stand auswerten";
    this.title_results = "Ergebnis";
    this.title_results_summary = "Zusammenfassung";
    this.text_result_below_summary = '<small>Nicht zufrieden mit dem Ergebnis?\
				<button class="btn btn-sm btn-light" onclick="showMahlowatFirstThesis()">Ändere die Antworten oder die Gewichtung!</button>\
			</small>';
    this.title_results_details = "";
    this.btn_results_show_start = "Zurück zur Startseite";
    this.btn_results_show_qa = "Fragen &amp; Antworten";
  }

  _createClass(T, [{
    key: "thesis_number",
    value: function thesis_number(number) {
      return "These " + number;
    }
  }, {
    key: "achieved_points_text",
    value: function achieved_points_text(pointsForList, maxAchievablePoints) {
      return '' + pointsForList + '/' + maxAchievablePoints + ' Punkte';
    }
  }, {
    key: "btn_make_thesis_double_weight",
    get: function get() {
      return "These doppelt gewichten";
    }
  }, {
    key: "btn_thesis_has_double_weight",
    get: function get() {
      return "These wird doppelt gewichtet";
    }
  }, {
    key: "label_your_choice",
    get: function get() {
      return "Deine Wahl";
    }
  }, {
    key: "default_text_no_statement",
    get: function get() {
      return "<small class='text-muted'>Keine Stellungnahme.</small>";
    }
  }, {
    key: "error_loading_config_file",
    get: function get() {
      return '<b>Fehler</b> Die Konfigurationsdatei <a href="config/data.json"><tt>config/data.json</tt></a> konnte nicht geladen\
		werden. Existiert sie und enthält keine Syntaxfehler?';
    }
  }]);

  return T;
}();

