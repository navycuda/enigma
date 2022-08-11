const rotorWiring = {
  I: {
    wiring: "EKMFLGDQVZNTOWYHXUSPAIBRCJ",
    notch: "Y",
    turnover: "Q"
  },
  II: {
    wiring: "AJDKSIRUXBLHWTMCQGZNPYFVOE",
    notch: "M",
    turnover: "E"
  },
  III: {
    wiring: "BDFHJLCPRTXVZNYEIWGAKMUSQO",
    notch: "D",
    turnover: "V"
  },
  IV: {
    wiring: "ESOVPZJAYQUIRHXLNFTGKDCMWB",
    notch: "R",
    turnover: "J"
  },
  V: {
    wiring: "VZBRGITYUPSDNHLXAWMJQOFECK",
    notch: "H",
    turnover: "Z"
  },
};

class Rotor {
  constructor(romanId) {
    const rw = rotorWiring[romanId];
    this.wiring = rw.wiring;
    this.notch = rw.notch;
    this.turnover = rw.turnover;
  }
}

module.exports = Rotor;