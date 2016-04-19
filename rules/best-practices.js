module.exports = {
    "rules": {
        // enforces getter/setter pairs in objects
        "accessor-pairs": 0,
        // enforces return statements in callbacks of array"s methods
        // http://eslint.org/docs/rules/array-callback-return
        "array-callback-return": 1,
        // treat var statements as if they were block scoped
        "block-scoped-var": 0,
        // specify the maximum cyclomatic complexity allowed in a program
        "complexity": 0,
        // require return statements to either always or never specify values
        "consistent-return": 2,
        // specify curly brace conventions for all control statements
        "curly": 1,
        // require default case in switch statements
        "default-case": 0,
        // encourages use of dot notation whenever possible
        "dot-notation": 1,
        // enforces consistent newlines before or after dots
        "dot-location": 0,
        // require the use of === and !==
        "eqeqeq": 1,
        // make sure for-in loops have an if statement
        "guard-for-in": 1,
        // Blacklist certain identifiers to prevent them being used
        // http://eslint.org/docs/rules/id-blacklist
        "id-blacklist": 0,
        // disallow the use of alert, confirm, and prompt
        "no-alert": 1,
        // disallow use of arguments.caller or arguments.callee
        "no-caller": 1,
        // disallow lexical declarations in case/default clauses
        // http://eslint.org/docs/rules/no-case-declarations.html
        "no-case-declarations": 0,
        // disallow division operators explicitly at beginning of regular expression
        "no-div-regex": 1,
        // disallow else after a return in an if
        "no-else-return": 1,
        // disallow Unnecessary Labels
        // http://eslint.org/docs/rules/no-extra-label
        "no-extra-label": 1,
        // disallow comparisons to null without a type-checking operator
        "no-eq-null": 1,
        // disallow use of eval()
        "no-eval": 2,
        // disallow adding to native types
        "no-extend-native": 1,
        // disallow unnecessary function binding
        "no-extra-bind": 1,
        // disallow fallthrough of case statements
        "no-fallthrough": 1,
        // disallow the use of leading or trailing decimal points in numeric literals
        "no-floating-decimal": 1,
        // disallow the type conversions with shorter notations
        "no-implicit-coercion": 0,
        // disallow use of eval()-like methods
        "no-implied-eval": 1,
        // disallow this keywords outside of classes or class-like objects
        "no-invalid-this": 0,
        // disallow usage of __iterator__ property
        "no-iterator": 1,
        // disallow use of labels for anything other then loops and switches
        "no-labels": [2, {
            "allowLoop": true,
            "allowSwitch": true
        }],
        // disallow unnecessary nested blocks
        "no-lone-blocks": 1,
        // disallow creation of functions within loops
        "no-loop-func": 0,
        // disallow use of multiple spaces
        "no-multi-spaces": 1,
        // disallow use of multiline strings
        "no-multi-str": 1,
        // disallow reassignments of native objects
        "no-native-reassign": 1,
        // disallow use of new operator when not part of the assignment or comparison
        "no-new": 0,
        // disallow use of new operator for Function object
        "no-new-func": 1,
        // disallows creating new instances of String, Number, and Boolean
        "no-new-wrappers": 1,
        // disallow use of (old style) octal literals
        "no-octal": 1,
        // disallow use of octal escape sequences in string literals, such as
        // var foo = "Copyright \251";
        "no-octal-escape": 1,
        // disallow reassignment of function parameters
        // disallow parameter object manipulation
        // rule: http://eslint.org/docs/rules/no-param-reassign.html
        "no-param-reassign": 0,
        // disallow use of process.env
        "no-process-env": 0,
        // disallow usage of __proto__ property
        "no-proto": 1,
        // disallow declaring the same variable more then once
        "no-redeclare": 1,
        // disallow use of assignment in return statement
        "no-return-assign": 0,
        // disallow use of `javascript:` urls.
        "no-script-url": 1,
        // disallow comparisons where both sides are exactly the same
        "no-self-compare": 1,
        // disallow use of comma operator
        "no-sequences": 1,
        // restrict what can be thrown as an exception
        "no-throw-literal": 1,
        // disallow unmodified conditions of loops
        // http://eslint.org/docs/rules/no-unmodified-loop-condition
        "no-unmodified-loop-condition": 1,
        // disallow usage of expressions in statement position
        "no-unused-expressions": 0,
        // disallow unused labels
        // http://eslint.org/docs/rules/no-unused-labels
        "no-unused-labels": 1,
        // disallow unnecessary .call() and .apply()
        "no-useless-call": 0,
        // disallow unnecessary string escaping
        // http://eslint.org/docs/rules/no-useless-escape
        "no-useless-escape": 2,
        // disallow use of void operator
        "no-void": 1,
        // disallow usage of configurable warning terms in comments: e.g. todo
        "no-warning-comments": 0,
        // disallow use of the with statement
        "no-with": 2,
        // require use of the second argument for parseInt()
        "radix": 0,
        // requires to declare all vars on top of their containing scope
        "vars-on-top": 0,
        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        "wrap-iife": 1,
        // require or disallow Yoda conditions
        "yoda": [1, "never"]
    }
};
