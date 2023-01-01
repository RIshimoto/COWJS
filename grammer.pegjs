{
    const {
        emitProgram, 
        emitmoOToken,
        emitmOoToken,
        emitMoOToken,
        emitMOoToken,
        emitoomToken,
        emitOOMToken,
        emitMOOToken,
        emitmOOToken,
        emitOOOToken,
        emitMMMToken,
        emitMooToken,
    } = require("./helper");
}

start = body:line* { return emitProgram(body); }
line = sp* instr:instruction* nl { return instr; }
instruction = tkn:token sp* { return tkn; }
token = moO / mOo / MoO / MOo / oom / OOM / Moo / MMM / OOO / MOO

moO = "moO" { return emitmoOToken(); }
mOo = "mOo" { return emitmOoToken(); }
MoO = "MoO" { return emitMoOToken(); }
MOo = "MOo" { return emitMOoToken(); }
oom = "oom" { return emitoomToken(); }
OOM = "OOM" { return emitOOMToken(); }
Moo = "Moo" { return emitMooToken(); }
MMM = "MMM" { return emitMMMToken(); }
OOO = "OOO" { return emitOOOToken(); }
MOO = "MOO" line:line* sp* instr:instruction* "moo" 
    { const content = line.concat(instr); return emitMOOToken(content); }
sp =  "\t" / " "
nl = "\r" /  "\n"
