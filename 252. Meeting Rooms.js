function minMeetingRooms(meetingSchedules) {

}

console.log(minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20]
]));



var lengthOfLongestSubstring = function (s) {
    if (s.length === 1) return 1;
    let maxLength = 0;
    let curr = "";
    let hashtable = {};
    for (let i = 0; i < s.length; i++) {
        for (const key in hashtable) {
            while (s.indexOf(key + key + key) !== -1) {
                s = s.slice(0, s.indexOf(key + key + key)) + s.slice(s.indexOf(key + key + key) + key.length);
                console.log(s);
            }
        }

        strings = s.slice(i);
        curr = ""
        for (const char of strings) {
            if (curr.indexOf(char) === -1) {
                curr += char;
                if (curr.length > maxLength) {
                    maxLength = curr.length;
                    hashtable[curr] = true;
                }
            } else {
                curr = char;
            }
        }
    }
    console.log(hashtable);

    return maxLength;
};

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("dvdf"));
// console.log(lengthOfLongestSubstring("asjrgapa"));
// console.log(lengthOfLongestSubstring("bbtablud"));
// console.log(lengthOfLongestSubstring("wsslpluuwekuaxt"));
// console.log(lengthOfLongestSubstring("abckjabcabcabc"));
console.log(lengthOfLongestSubstring("umvejcuuk"));