require 'benchmark'

def palindrome?(number)
  string1 = number.to_s
  string2 = string1.reverse
  if string1.eql? string2
    return true
  else
    return false
  end
end


def largest_palindrome_v1(start, limit)
  largest = 0
  product = 0

  start.upto(limit) do |i|
    start.upto(limit) do |j|
      product = i * j
      if palindrome?(product) && product > largest
        largest = product
      end 
    end
  end

  return largest
end


def largest_palindrome_v2(digits)
  min_limit = 10 ** (digits - 1)
  max_limit = 10 ** digits - 1
  largest_palindrome = 0

  min_limit.upto(max_limit) do |i|
    i.upto(max_limit) do |j|
      product = i * j
      if palindrome?(product) && product > largest_palindrome
        largest_palindrome = product
      end
    end
  end

  return largest_palindrome
end


# Code benchmark
Benchmark.bm(5) do |bm|
  bm.report('V1: ') do
    largest_palindrome_v1(100, 999)    
  end

  bm.report('V2: ') do
    largest_palindrome_v2(3) 
  end
end

puts largest_palindrome_v1(100, 999)
puts largest_palindrome_v2(3)