When developing a solution for efficiently extracting logs from a 1TB log file, multiple approaches were evaluated:

Loading the Entire File into Memory (Not Feasible)
This method involved reading the entire log file into memory, breaking it into lines, and filtering based on the given date.

Advantages: Easy to implement and straightforward to process once the data is loaded.
Disadvantages: Not suitable for very large files, as 1TB of data would exceed memory limits and significantly impact performance.
Conclusion: Discarded due to high memory consumption and inefficiency.
Line-by-Line Streaming (Final Approach)
This technique leverages fs.createReadStream() to process the file line by line, preventing excessive memory usage.

Advantages:
Memory-efficient – Only one line is read at a time.
Fast – Reduces unnecessary I/O operations.
Scalable – Handles extremely large files effectively.
Disadvantages: Slightly more complex to implement compared to a basic in-memory approach.
Conclusion: Chosen as the final solution for its optimal balance of performance and scalability.
