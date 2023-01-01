let pointer = 0;
let memory = new Array(40000).fill(0);
let register = null;
memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
pointer++;
pointer++;
memory[pointer]++;
pointer++;
memory[pointer]++;
memory[pointer]++;
pointer++;
memory[pointer]++;
memory[pointer]++;
memory[pointer]++;
memory[pointer]++;
pointer--;
pointer--;
pointer--;
pointer--;
while (memory[pointer]) {
    pointer++;
    pointer++;
    pointer++;
    while (memory[pointer]) {
        pointer++;
        pointer++;
        memory[pointer]++;
        pointer++;
        memory[pointer]++;
        pointer--;
        pointer--;
        pointer--;
        memory[pointer]--;
    }
    pointer++;
    pointer++;
    while (memory[pointer]) {
        pointer--;
        pointer--;
        memory[pointer]++;
        pointer++;
        pointer++;
        memory[pointer]--;
    }
    pointer++;
    pointer--;
    memory[pointer]++;
    pointer++;
    while (memory[pointer]) {
        while (memory[pointer]) {
            memory[pointer]--;
        }
        pointer--;
        memory[pointer]--;
        pointer++;
        pointer--;
        pointer--;
        while (memory[pointer]) {
            pointer++;
            memory[pointer]++;
            pointer++;
            memory[pointer]++;
            pointer--;
            pointer--;
            memory[pointer]--;
        }
        pointer++;
        while (memory[pointer]) {
            pointer--;
            memory[pointer]++;
            pointer++;
            memory[pointer]--;
        }
        pointer++;
        pointer--;
        memory[pointer]++;
        pointer++;
        while (memory[pointer]) {
            while (memory[pointer]) {
                memory[pointer]--;
            }
            pointer--;
            memory[pointer]--;
            pointer++;
            pointer--;
            pointer--;
            pointer--;
            pointer--;
            pointer--;
            while (memory[pointer]) {
                pointer++;
                pointer++;
                pointer++;
                pointer++;
                memory[pointer]++;
                pointer++;
                memory[pointer]++;
                pointer--;
                pointer--;
                pointer--;
                pointer--;
                pointer--;
                memory[pointer]--;
            }
            pointer++;
            pointer++;
            pointer++;
            pointer++;
            while (memory[pointer]) {
                pointer--;
                pointer--;
                pointer--;
                pointer--;
                memory[pointer]++;
                pointer++;
                pointer++;
                pointer++;
                pointer++;
                memory[pointer]--;
            }
            pointer++;
            while (memory[pointer]) {
                pointer++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                while (memory[pointer]) {
                    pointer--;
                    memory[pointer]++;
                    memory[pointer]++;
                    memory[pointer]++;
                    memory[pointer]++;
                    memory[pointer]++;
                    memory[pointer]++;
                    memory[pointer]++;
                    memory[pointer]++;
                    pointer++;
                    memory[pointer]--;
                }
                pointer--;
                if (memory[pointer]) {
                    process.stdout.write(String.fromCharCode(memory[pointer]));
                } else {
                    memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
                }
                while (memory[pointer]) {
                    memory[pointer]--;
                }
            }
            pointer--;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            while (memory[pointer]) {
                pointer--;
                pointer--;
                pointer--;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                pointer++;
                pointer++;
                pointer++;
                memory[pointer]--;
            }
            pointer++;
            pointer--;
            pointer--;
            pointer--;
            pointer--;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            pointer++;
            pointer++;
            pointer++;
            pointer++;
            pointer--;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            while (memory[pointer]) {
                pointer--;
                pointer--;
                pointer--;
                memory[pointer]--;
                memory[pointer]--;
                memory[pointer]--;
                memory[pointer]--;
                memory[pointer]--;
                memory[pointer]--;
                memory[pointer]--;
                memory[pointer]--;
                pointer++;
                pointer++;
                pointer++;
                memory[pointer]--;
            }
            pointer++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
        }
        pointer--;
        while (memory[pointer]) {
            memory[pointer]--;
            pointer++;
            pointer++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            while (memory[pointer]) {
                pointer--;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                pointer++;
                memory[pointer]--;
            }
            pointer--;
            memory[pointer]--;
            memory[pointer]--;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
            pointer--;
            pointer--;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            pointer++;
            pointer++;
            pointer--;
        }
        pointer++;
    }
    pointer--;
    while (memory[pointer]) {
        memory[pointer]--;
        pointer++;
        pointer--;
        pointer--;
        while (memory[pointer]) {
            pointer++;
            memory[pointer]++;
            pointer++;
            memory[pointer]++;
            pointer--;
            pointer--;
            memory[pointer]--;
        }
        pointer++;
        while (memory[pointer]) {
            pointer--;
            memory[pointer]++;
            pointer++;
            memory[pointer]--;
        }
        pointer++;
        pointer--;
        memory[pointer]++;
        pointer++;
        while (memory[pointer]) {
            while (memory[pointer]) {
                memory[pointer]--;
            }
            pointer--;
            memory[pointer]--;
            pointer++;
            pointer++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            while (memory[pointer]) {
                pointer--;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                pointer++;
                memory[pointer]--;
            }
            pointer--;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
        }
        pointer--;
        while (memory[pointer]) {
            memory[pointer]--;
            pointer++;
            pointer++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            while (memory[pointer]) {
                pointer--;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                memory[pointer]++;
                pointer++;
                memory[pointer]--;
            }
            pointer--;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            memory[pointer]--;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            if (memory[pointer]) {
                process.stdout.write(String.fromCharCode(memory[pointer]));
            } else {
                memory[pointer] = Number(require('fs').readFileSync('/dev/stdin', 'utf8').split('\n')[0]);
            }
            while (memory[pointer]) {
                memory[pointer]--;
            }
            pointer--;
            pointer--;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            memory[pointer]++;
            pointer++;
            pointer++;
            pointer--;
        }
        pointer++;
        pointer--;
        pointer--;
        pointer--;
        memory[pointer]++;
        memory[pointer]++;
        memory[pointer]++;
        pointer++;
        pointer++;
        pointer++;
        pointer--;
    }
    pointer++;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    pointer++;
    pointer++;
    pointer++;
    memory[pointer]--;
    pointer++;
    memory[pointer]--;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    pointer++;
    pointer++;
    while (memory[pointer]) {
        pointer++;
        pointer++;
        pointer++;
        memory[pointer]++;
        pointer++;
        memory[pointer]++;
        pointer--;
        pointer--;
        pointer--;
        pointer--;
        memory[pointer]--;
    }
    pointer++;
    pointer++;
    pointer++;
    while (memory[pointer]) {
        pointer--;
        pointer--;
        pointer--;
        memory[pointer]++;
        pointer++;
        pointer++;
        pointer++;
        memory[pointer]--;
    }
    pointer++;
    while (memory[pointer]) {
        pointer--;
        memory[pointer]++;
        pointer++;
        memory[pointer]--;
    }
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    memory[pointer]++;
    pointer--;
    while (memory[pointer]) {
        pointer++;
        memory[pointer]--;
        pointer--;
        memory[pointer]--;
    }
    pointer++;
    pointer--;
    memory[pointer]++;
    pointer++;
    while (memory[pointer]) {
        pointer--;
        pointer--;
        pointer--;
        pointer--;
        memory[pointer]++;
        pointer++;
        pointer++;
        pointer++;
        pointer++;
        while (memory[pointer]) {
            memory[pointer]--;
        }
        pointer--;
        memory[pointer]--;
        pointer++;
    }
    pointer--;
    while (memory[pointer]) {
        pointer++;
        pointer--;
        pointer--;
        pointer--;
        pointer--;
        pointer--;
        memory[pointer]++;
        pointer++;
        while (memory[pointer]) {
            memory[pointer]--;
        }
        pointer++;
        pointer++;
        pointer++;
        pointer++;
        pointer--;
        memory[pointer]--;
    }
    pointer++;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    pointer--;
    memory[pointer]--;
}