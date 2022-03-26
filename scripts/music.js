(function() {
  angular.module("Music", [])
    .service("MusicService", MusicService);

  // service function MusicService
  function MusicService($http) {
    var service = {};
    service = {
      getKeyboard: getKeyboard,
      parseMusicXML: parseMusicXML,
      getMeasureMax: getMeasureMax
    };
    return service;


    // function getKeyboard
    function getKeyboard() {
      var steps = ["C", "D", "E", "F", "G", "A", "B"];
      var octaves = [0, 1];
      var invalidNotes = [
        "0C", "0D", "0E", "0F", "0G", "0A", "0B",
        "8D", "8E", "8F", "8G", "8A", "8B",
      ];
      var keys = [];

      // push whiteKeys
      var position = 0;
      octaves.forEach(function(octave) {
        steps.forEach(function(step) {
          var whiteKey = genKeyboardKey(position, octave, step, "", true, true, 0);
          if (invalidNotes.indexOf(whiteKey.note) == -1) { // push only valid keys
            keys.push(whiteKey);
          }
          position += 1;
        });
      });

      // push blackKeys
      position = 0.5;
      octaves.forEach(function(octave) {
        steps.forEach(function(step) {
          var blackKey = genKeyboardKey(position, octave, step, "\u266f", false, true, 0);
          var note = octave + step;
          if (invalidNotes.indexOf(blackKey.note) == -1) { // push only valid keys
            if (blackKey.step == "E" || blackKey.step == "B" || blackKey.note == "8C")
              blackKey.exists = false;
            keys.push(blackKey);
          }
          position += 1;
        });
      });
      return keys;

      // helper function genKeyBoardKey
      function genKeyboardKey(position, octave, step, sign, white, exists, count) {
        var key = {
          keyId: octave + step + sign,
          note: octave + step,
          step: step,
          octave: octave,
          sign: sign,
          white: white,
          exists: exists,
          position: position,
          count: count
        };
        return key;
      }
    }


    // function parseMusicXML
    function parseMusicXML(xml) {
      var keys = [];
      var noteRemap = {
        "C\u266d": {
          newNote: "B",
          octaveModifier: -1
        },
        "D\u266d": {
          newNote: "C\u266f",
          octaveModifier: 0
        },
        "E\u266d": {
          newNote: "D\u266f",
          octaveModifier: 0
        },
        "F\u266d": {
          newNote: "E",
          octaveModifier: 0
        },
        "G\u266d": {
          newNote: "F\u266f",
          octaveModifier: 0
        },
        "A\u266d": {
          newNote: "G\u266f",
          octaveModifier: 0
        },
        "B\u266d": {
          newNote: "A\u266f",
          octaveModifier: 0
        },
        "E\u266f": {
          newNote: "F",
          octaveModifier: 0
        },
        "B\u266f": {
          newNote: "C",
          octaveModifier: 1
        },
      };
      angular.forEach(angular.element(xml).find("pitch"), function(tag) {
        var step = angular.element(tag).find("step").html();
        var alter = angular.element(tag).find("alter").html();
        var octave = parseInt(angular.element(tag).find("octave").html());
        var measure = parseInt(angular.element(tag).parent().parent().attr("number"));
        // logic to assign signs
        var sign = "";
        if (alter == 1) sign = "\u266f";
        if (alter == -1) sign = "\u266d";
        var note = step + sign;
        var newNote = noteRemap[note];

        // if notes need to be mapped to newNotes
        if (typeof newNote !== "undefined") {
          note = newNote.newNote;
          octave += newNote.octaveModifier;
        }
        // Generate the right keyId after remapping notes
        var keyId = octave + note;
        var key = {
          keyId: keyId,
          measure: parseInt(measure),
        };
        keys.push(key);
      });
      return keys;
    }


    // function getMeasureMax
    function getMeasureMax(keys) {
      measureMax = 0;
      keys.forEach(function(key) {
        if (key.measure  > measureMax) measureMax = key.measure;
      });
      return measureMax;
    }
  }
})();
