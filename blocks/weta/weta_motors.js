Blockly.defineBlocksWithJsonArray(
[
  {
    "type": "weta_motors_select",
    "message0": "%{BKY_WETA_MOTORS_SELECT_MSG0}",
    "args0": [
      {
        "type": "field_checkbox",
        "name": "MOTOR_A",
        "checked": true
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_B",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_C",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_D",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_E",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_F",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_G",
        "checked": false
      },
      {
        "type": "field_checkbox",
        "name": "MOTOR_H",
        "checked": false
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
     "colour": "%{BKY_WETA_MOTORS_HUE}",
    "tooltip": "%{BKY_WETA_MOTORS_SELECT_TOOLTIP}"
  },
  {
    "type": "weta_motors_control",
    "message0": "%{BKY_WETA_MOTORS_CONTROL_MSG0}",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "OP",
        "options": [
          [
            "%{BKY_WETA_ON}",
            "on"
          ],
          [
            "%{BKY_WETA_ON}",
            "off"
          ],
          [
            "%{BKY_WETA_MOTORS_THISWAY}",
            "thisway"
          ],
          [
            "%{BKY_WETA_MOTORS_THATWAY}",
            "thatway"
          ],
          [
            "%{BKY_WETA_MOTORS_REVERSE}",
            "rd"
          ],
          [
            "%{BKY_WETA_MOTORS_BRAKE}",
            "brake"
          ]
        ]
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "inputsInline": true,
    "colour": "%{BKY_WETA_MOTORS_HUE}",
    "tooltip": "%{BKY_WETA_MOTORS_CONTROL_TOOLTIP}"
  },
  {
    "type": "weta_motors_power",
    "message0": "%{BKY_WETA_MOTORS_POWER_MSG0}",
    "args0": [
      {
        "type": "input_value",
        "name": "POWER",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_WETA_MOTORS_HUE}",
    "tooltip": "%{BKY_WETA_MOTORS_POWER_TOOLTIP}",
    "helpUrl": "http://www.example.com/"
  },
  {
    "type": "weta_motors_on_for",
    "message0": "%{BKY_WETA_MOTORS_ON_FOR_MSG0}",
    "args0": [
      {
        "type": "input_value",
        "name": "PERIOD",
        "check": "Number"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": "%{BKY_WETA_MOTORS_HUE}",
    "tooltip": "%{BKY_WETA_MOTORS_ON_FOR_TOOLTIP}",
    "helpUrl": ""
  }
]
);
