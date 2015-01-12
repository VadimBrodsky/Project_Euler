require 'benchmark'

# Determines if the input number is a prime
def prime?(number)
  return true if number == 2
  return true if number == 3

  i = 2
  while i <= Math.sqrt(number).floor
    if number % i == 0
      return false
    end
    i = i + 1
  end

  return true
end


# Determines if the input divison is a factor of the input number
def factor?(number, divisor)
  if number % divisor == 0
    return true
  else
    return false
  end
end


# The Almost brute force method
def largest_prime_factor_v1(number)
  largest_factor = 0

  2.upto(Math.sqrt(number).floor) do |i|
    if factor?(number, i)
      if prime?(i)
        if largest_factor < i
          largest_factor = i
        end
      end
    end
  end

  return largest_factor
end


# Reduction method
def largest_prime_factor_v2(number)
  largest_factor = 0

  i = 1
  limit = number
  
  while i <= limit
    if factor?(limit, i)
      limit = limit / i
      if prime?(i)
        if largest_factor < i
          largest_factor = i
        end
      end
    end
    i += 1
  end

  return largest_factor
end


# Code benchmark
Benchmark.bm(5) do |bm|
  bm.report('V1: ') do
    largest_prime_factor_v1(600851475143)
  end

  bm.report('V2: ') do
    largest_prime_factor_v2(600851475143)
  end
end

puts "Answer: #{largest_prime_factor_v1(600851475143)}"
puts "Answer: #{largest_prime_factor_v2(600851475143)}"