Blockly.defineBlocksWithJsonArray(
[
  {
    "type": "weta_servo_select",
    "message0": "%{BKY_WETA_SERVO_SELECT_MSG0}",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "SERVO_N",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_O",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_P",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_Q",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_R",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_S",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_T",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "SERVO_U",
        "checked": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "colour": "%{BKY_WETA_SERVO_HUE}",
    "tooltip": "%{BKY_WETA_SERVO_SELECT_TOOLTIP}"
  },
  {
    "type": "weta_servo_heading",
    "message0": "%{BKY_WETA_SERVO_HEADING_MSG0}",
    "args0": [
      {
        "type": "input_value",
        "name": "HEADING",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_WETA_SERVO_HUE}",
    "tooltip": "%{BKY_WETA_SERVO_HEADING_TOOLTIP}",
    "helpUrl": ""
  },
  {
    "type": "weta_servo_left_right",
    "message0": "%{BKY_WETA_SERVO_LEFT_RIGHT_MSG0}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "DIR",
        "options": [
          [
            "%{BKY_WETA_LEFT}",
            "l"
          ],
          [
            "%{BKY_WETA_RIGHT}",
            "r"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "STEPS",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_WETA_SERVO_HUE}",
    "tooltip": "%{BKY_WETA_SERVO_LEFT_RIGHT_TOOLTIP}",
    "helpUrl": ""
  }
]
);
