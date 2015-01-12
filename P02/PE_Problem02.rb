require 'benchmark'

def even_fibonacci_numbers
  limit = 4000000
  sum = 0

  current_number = 0
  num1 = 1
  num2 = 1

  while current_number < limit
    current_number = num1 + num2
    num1 = num2
    num2 = current_number

    # puts current_number

    if current_number.even?
      sum = sum + current_number
    end 
  end

  return sum
end


# Code benchmark
Benchmark.bm(5) do |bm|
  bm.report('V1: ') do
    even_fibonacci_numbers
  end
end

puts "Answer: #{even_fibonacci_numbers}"