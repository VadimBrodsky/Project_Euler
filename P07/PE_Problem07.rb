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


def prime_number_at_position_v1(target)
	index = 3
	prime_count = 1
	while prime_count < target do
		if prime?(index)
			prime_count += 1
		end
		index += 2
	end
	return index - 2
end




# Code benchmark
Benchmark.bm(5) do |bm|
  bm.report('V1: ') do
	prime_number_at_position_v1(10_001)	
  end
end

puts prime_number_at_position_v1(10_001)