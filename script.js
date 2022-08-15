const dates = ["On August 15", "On September 23", "On July 14", "On March 9"];
const horoscope_signs = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio"];
const advice = ["should finish projects that have been pending and think about what they want to tackle next",
     "should get together with friends, if possible, or watch a movie",
     "should not judge someone just because his or her lifestyle differs from what they consider normal",
     "should make plans for some fun such as taking in an event that really intrigues them",
     "should find more freedom to act independently without consequences"];

const getRandNum = num => Math.floor(Math.random() * num);

let message = '';

const dateIdx = getRandNum(dates.length);
const signIdx = getRandNum(horoscope_signs.length);
const adviceIdx = getRandNum(advice.length);

message = dates[dateIdx] + " " + horoscope_signs[signIdx] + " " + advice[adviceIdx];

console.log(message);