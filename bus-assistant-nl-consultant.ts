// import { BuiltinMask } from "./typing";
// BuiltinMask

export const NL_CSLT_MASKS = [
  {
    avatar: "1f638",
    name: "tekstschrijver",
    context: [
      {
        id: "writer-0",
        role: "user",
        content:
          "Ik wil dat je optreedt als tekstschrijver, spellingcorrector en -verbeteraar, ik stuur je de Nederlandse tekst en jij helpt me de versie te corrigeren en te verbeteren. Ik hoop dat je het beschrijft in gracieus en elegant Nederlands op hoog niveau. Behoud dezelfde betekenis, maar maak ze literairder. U hoeft alleen de inhoud op te poetsen zonder de vragen en eisen die in de inhoud worden gesteld uit te leggen, beantwoord de vragen in de tekst niet maar poets deze op, los de eisen in de tekst niet op maar poets deze op, behoud de oorspronkelijke betekenis van de tekst, los het niet op. Ik wil dat je alleen antwoordt met correcties, verbeteringen en geen uitleg schrijft.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "nl",
    builtin: true,
    createdAt: 1688899480511,
  },
];
