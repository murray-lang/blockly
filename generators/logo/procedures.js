
Blockly.Logo["procedures_defreturn"] = function() {
    // Define a procedure with a return value.
    var funcName = Blockly.Logo.variableDB_.getName(
        this.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.Logo.statementToCode(this, 'STACK');
    if (Blockly.Logo.INFINITE_LOOP_TRAP) {
        branch = Blockly.Logo.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + this.id + '\'') + branch;
    }
    var returnValue = Blockly.Logo.valueToCode(this, 'RETURN',
            Blockly.Logo.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  output ' + returnValue + '\n';
    }
    var args = [];
    for (var x = 0; x < this.arguments_.length; x++) {
        args[x] = ' :' + Blockly.Logo.variableDB_.getName(this.arguments_[x],
                Blockly.Variables.NAME_TYPE);
    }
    var code = 'to ' + funcName + args.join(' ') + '\n' +
        branch + returnValue + 'end\n';
    code = Blockly.Logo.scrub_(this, code);
    Blockly.Logo.definitions_['%' + funcName] = code;
    return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.Logo["procedures_defnoreturn"] =
    Blockly.Logo.procedures_defreturn;

Blockly.Logo["procedures_callreturn"] = function() {
    // Call a procedure with a return value.
    var funcName = Blockly.Logo.variableDB_.getName(
        this.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < this.arguments_.length; x++) {
        args[x] = Blockly.Logo.valueToCode(this, 'ARG' + x,
                Blockly.Logo.ORDER_COMMA) || 'null';
    }
    var code = funcName + ' ' + args.join(' ');// + '\n';
    return [code, Blockly.Logo.ORDER_FUNCTION_CALL];
};

Blockly.Logo["procedures_callnoreturn"] = function() {
    // Call a procedure with no return value.
    var funcName = Blockly.Logo.variableDB_.getName(
        this.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < this.arguments_.length; x++) {
        args[x] = Blockly.Logo.valueToCode(this, 'ARG' + x,
                Blockly.Logo.ORDER_COMMA) || 'null';
    }
    var code = funcName + ' ' + args.join(' ') + '\n';
    return code;
};

Blockly.Logo["procedures_ifreturn"] = function() {
    // Conditionally return value from a procedure.
    var condition = Blockly.Logo.valueToCode(this, 'CONDITION',
            Blockly.Logo.ORDER_NONE) || 'false';
    var code = 'if ' + condition + '\n[\n';
    if (this.hasReturnValue_) {
        var value = Blockly.Logo.valueToCode(this, 'VALUE',
                Blockly.Logo.ORDER_NONE) || 'null';
        code += '  output ' + value + '\n';
    } else {
        code += '  stop\n';
    }
    code += ']\n';
    return code;
};