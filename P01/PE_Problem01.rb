# Problem 1: Multiples of 3 and 5

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Find the sum of all the multiples of 3 or 5 below 1000.

require 'benchmark'

def multiples_3_5_v1
	multiples = (1...1000).find_all do |i| 
		i % 3 == 0 || i % 5 == 0
	end

	answer = multiples.inject do |memo, num|
		memo + num
	end

	return answer
end


def multiples_3_5_v2
	sum = 0

	1.upto(999) do |i|
		if i % 3 == 0 || i % 5 == 0
			sum = sum + i
		end
	end

	return sum
end



# Code benchmark
Benchmark.bm(5) do |bm|
	bm.report('V1: ') do
		multiples_3_5_v1
	end

	bm.report('V2: ') do
		multiples_3_5_v2
	end
end