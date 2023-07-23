// utility to obtain a random index value, where num is the length of the array
function randIdxValue(num) {
    return Math.floor(Math.random() * num);
}

// a collection of components used to build the poem
const poemComps = {
    domain: ['the void', 'the heavens', 'the aethyr', 'the darkness'],
    request: ['a sign', 'a token', 'a boon', 'a reason'],
    envoy: ['great angel', 'squamous entity', 'writhing tentacle', 'hellish visage'],
    response: ['"Which way to the restroom?"', '"Are you my dinner?"', '"You come here often?"', '"Did your mother dress you?"']
};

// create the message
let message = []

// add components
for (let comp in poemComps) {
    idx = randIdxValue(poemComps[comp].length);

    switch (comp) {
        case 'domain': 
            message.push(`I called into ${poemComps[comp][idx]}`);
            break;
        case 'request':
            message.push(`To give me ${poemComps[comp][idx]};`);
            break;
        case 'envoy':
            message.push(`A ${poemComps[comp][idx]} appeared,`);
            break;
        case 'response':
            message.push(`${poemComps[comp][idx]} it asked.`);
            break;
        default:
            message.push('I am alone.');
            break;
    }
}

console.log(message);
