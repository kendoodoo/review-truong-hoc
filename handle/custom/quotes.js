var listofquotes = [
    '"Kiểm duyệt phản ánh sự thiếu tự tin của một xã hội vào chính nó." - Potter Stewart',
    '"Đôi khi, từ cấm đến đốt chỉ là một bước ngắn." - Howard Zinn',
    '"Mấy ông IT ở trường toàn ngồi câu like Facebook thôi" - kendoodoo (tui)',
    '"Trường học nói chung là một thứ tốt, nhưng đôi khi việc học bị cản trở bởi sự lố bịch." - u/sometimes_Lies_alot'
]

let randomquotes = listofquotes[Math.floor(Math.random() * listofquotes.length)]

module.exports = randomquotes