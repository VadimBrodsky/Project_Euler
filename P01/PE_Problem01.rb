require 'benchmark'

# Approach 1 - using ranges and find_all
def multiples_3_5_v1
	multiples = (1...1000).find_all do |i| 
		i % 3 == 0 || i % 5 == 0
	end

	answer = multiples.inject do |memo, num|
		memo + num
	end

	return answer
end


# Appriach 2 - simple iterator
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