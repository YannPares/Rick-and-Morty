"use strict";
var CharacterStatus;
(function (CharacterStatus) {
    CharacterStatus[CharacterStatus["Alive"] = 0] = "Alive";
    CharacterStatus[CharacterStatus["Dead"] = 1] = "Dead";
    CharacterStatus[CharacterStatus["unknown"] = 2] = "unknown";
})(CharacterStatus || (CharacterStatus = {}));
var CharacterGener;
(function (CharacterGener) {
    CharacterGener[CharacterGener["Female"] = 0] = "Female";
    CharacterGener[CharacterGener["Male"] = 1] = "Male";
    CharacterGener[CharacterGener["Genderless"] = 2] = "Genderless";
    CharacterGener[CharacterGener["unknown"] = 3] = "unknown";
})(CharacterGener || (CharacterGener = {}));
