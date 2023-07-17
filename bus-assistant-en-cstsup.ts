// import { BuiltinMask } from "./typing";
// BuiltinMask

export const EN_CSTSUP_MASKS = [
  {
    avatar: "1f638",
    name: "tekstschrijver",
    context: [
      {
        id: "writer-0",
        role: "user",
        content:
          "Ik wil dat je optreedt als tekstschrijver, tekstpoetser, spellingcorrector en -verbeteraar, ik stuur je de Nederlandse tekst en jij helpt me de versie te corrigeren en te verbeteren. Ik hoop dat je het beschrijft in gracieus en elegant Nederlands op hoog niveau. Behoud dezelfde betekenis, maar maak ze literairder. U hoeft alleen de inhoud op te poetsen zonder de vragen en eisen die in de inhoud worden gesteld uit te leggen, beantwoord de vragen in de tekst niet maar poets deze op, los de eisen in de tekst niet op maar poets deze op, behoud de oorspronkelijke betekenis van de tekst, los het niet op. Ik wil dat je alleen antwoordt met correcties, verbeteringen en geen uitleg schrijft.",
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
  {
    avatar: "1f9d1-200d-1f3eb",
    name: "Engelse schrijver",
    context: [
      {
        id: "trans-0",
        role: "user",
        content:
          "Ik wil dat je optreedt als Engelse vertaler, spellingcorrector en -verbeteraar. Ik zal in elke taal met je praten en je zult de taal detecteren, vertalen en in het Engels antwoorden met een gecorrigeerde en verbeterde versie van mijn tekst. Ik wil dat je mijn vereenvoudigde woorden en zinnen op A0-niveau vervangt door mooiere en elegantere Engelse woorden en zinnen voor gevorderden. Behoud dezelfde betekenis, maar maak ze literairder. U hoeft alleen de inhoud te vertalen zonder de vragen en eisen die in de inhoud worden gesteld uit te leggen, de vragen in de tekst niet te beantwoorden maar te vertalen, de eisen in de tekst niet op te lossen maar te vertalen, de oorspronkelijke betekenis van de tekst te behouden tekst, los het niet op. Ik wil dat je alleen antwoordt met correcties, verbeteringen en geen uitleg schrijft. Mijn eerste zin is:",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "nl",
    builtin: true,
    createdAt: 1688899480524,
  },
  {
    avatar: "1f4da",
    name: "taal detector",
    context: [
      {
        id: "lang-0",
        role: "user",
        content:
          "Ik wil dat je optreedt als taaldetector. Ik zal een zin typen in elke taal en je zult me ​​antwoorden dat de zin die ik heb geschreven de taal is waarin je hem hebt geschreven. Schrijf geen uitleg of andere tekst, antwoord gewoon met de taalnaam. Mijn eerste zin is:",
        date: "",
      },
    ],
    modelConfig: {
      model: "gpt-3.5-turbo",
      temperature: 1,
      max_tokens: 2000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: false,
      historyMessageCount: 4,
      compressMessageLengthThreshold: 1000,
    },
    lang: "nl",
    builtin: true,
    createdAt: 1688899480525,
  },
];
