var _ = require('lodash');

function emitProgram (body) {
    const flatten = _.flattenDeep(body)
    return {
      "type": "Program",
      "body": [
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "pointer"
              },
              "init": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            }
          ],
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "memory"
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "name": "Array"
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 40000,
                        "raw": "40000"
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "fill"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            }
          ],
          "kind": "let"
        },
        {
          "type": "VariableDeclaration",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "name": "register"
              },
              "init": {
                "type": "Literal",
                "value": null,
                "raw": "null"
              }
            }
          ],
          "kind": "let"
        },
        ...flatten
      ],
      "sourceType": "script"
    };
}

function emitMoOToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "prefix": false
      }
    };
}

function emitMOoToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "prefix": false
      }
    };
}

function emitmoOToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "argument": {
          "type": "Identifier",
          "name": "pointer"
        },
        "prefix": false
      }
    };
}

function emitmOoToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "argument": {
          "type": "Identifier",
          "name": "pointer"
        },
        "prefix": false
      }
    };
}

function emitOOMToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "computed": false,
          "object": {
            "type": "Identifier",
            "name": "console"
          },
          "property": {
            "type": "Identifier",
            "name": "log"
          }
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "computed": true,
            "object": {
              "type": "Identifier",
              "name": "memory"
            },
            "property": {
              "type": "Identifier",
              "name": "pointer"
            }
          }
        ]
      }
    };
}

function emitMooToken() {
     return {
      "type": "IfStatement",
      "test": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "name": "memory"
        },
        "property": {
          "type": "Identifier",
          "name": "pointer"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "computed": false,
                "object": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "name": "process"
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "stdout"
                  }
                },
                "property": {
                  "type": "Identifier",
                  "name": "write"
                }
              },
              "arguments": [
                {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "name": "String"
                    },
                    "property": {
                      "type": "Identifier",
                      "name": "fromCharCode"
                    }
                  },
                  "arguments": [
                    {
                      "type": "MemberExpression",
                      "computed": true,
                      "object": {
                        "type": "Identifier",
                        "name": "memory"
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "pointer"
                      }
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "memory"
                },
                "property": {
                  "type": "Identifier",
                  "name": "pointer"
                }
              },
              "right": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "name": "Number"
                },
                "arguments": [
                  {
                    "type": "MemberExpression",
                    "computed": true,
                    "object": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "computed": false,
                        "object": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "name": "require"
                              },
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "value": "fs",
                                  "raw": "'fs'"
                                }
                              ]
                            },
                            "property": {
                              "type": "Identifier",
                              "name": "readFileSync"
                            }
                          },
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "/dev/stdin",
                              "raw": "'/dev/stdin'"
                            },
                            {
                              "type": "Literal",
                              "value": "utf8",
                              "raw": "'utf8'"
                            }
                          ]
                        },
                        "property": {
                          "type": "Identifier",
                          "name": "split"
                        }
                      },
                      "arguments": [
                        {
                          "type": "Literal",
                          "value": "\n",
                          "raw": "'\\n'"
                        }
                      ]
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    };
}

function emitMOOToken(content) {
    const flatten = _.flattenDeep(content);
    return {
      "type": "WhileStatement",
      "test": {
        "type": "MemberExpression",
        "computed": true,
        "object": {
          "type": "Identifier",
          "name": "memory"
        },
        "property": {
          "type": "Identifier",
          "name": "pointer"
        }
      },
      "body": {
        "type": "BlockStatement",
        "body": flatten
      }
    }
}

function emitMMMToken() {
    return {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "operator": "==",
        "left": {
          "type": "Identifier",
          "name": "register"
        },
        "right": {
          "type": "Literal",
          "value": null,
          "raw": "null"
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "Identifier",
                "name": "register"
              },
              "right": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "memory"
                },
                "property": {
                  "type": "Identifier",
                  "name": "pointer"
                }
              }
            }
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "name": "memory"
                },
                "property": {
                  "type": "Identifier",
                  "name": "pointer"
                }
              },
              "right": {
                "type": "Identifier",
                "name": "register"
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "BinaryExpression",
              "operator": "==",
              "left": {
                "type": "Identifier",
                "name": "register"
              },
              "right": {
                "type": "Literal",
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      }
    };
}

function emitOOOToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "right": {
          "type": "Literal",
          "value": 0,
          "raw": "0"
        }
      }
    };
}

function emitoomToken() {
    return {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "computed": true,
          "object": {
            "type": "Identifier",
            "name": "memory"
          },
          "property": {
            "type": "Identifier",
            "name": "pointer"
          }
        },
        "right": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "name": "Number"
          },
          "arguments": [
            {
              "type": "MemberExpression",
              "computed": true,
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "computed": false,
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "computed": false,
                      "object": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "name": "require"
                        },
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": "fs",
                            "raw": "\"fs\""
                          }
                        ]
                      },
                      "property": {
                        "type": "Identifier",
                        "name": "readFileSync"
                      }
                    },
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": "/dev/stdin",
                        "raw": "\"/dev/stdin\""
                      },
                      {
                        "type": "Literal",
                        "value": "utf8",
                        "raw": "\"utf8\""
                      }
                    ]
                  },
                  "property": {
                    "type": "Identifier",
                    "name": "split"
                  }
                },
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "\n",
                    "raw": "'\\n'"
                  }
                ]
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0"
              }
            }
          ]
        }
      }
    };
}

module.exports = {
    emitProgram, 
    emitmoOToken,
    emitmOoToken,
    emitMoOToken,
    emitMOoToken,
    emitoomToken,
    emitOOMToken,
    emitMOOToken,
    emitOOOToken,
    emitMMMToken,
    emitMooToken,
}
