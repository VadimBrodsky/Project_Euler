require 'benchmark'

def sum_of_squares(range)
	return range.inject do |memo, n|
		memo + n ** 2
	end
end

def square_of_sum(range)
	sum = range.inject do |memo, n|
		memo + n
	end
	sum ** 2
end

def difference_v1(range)
	square_of_sum(range) - sum_of_squares(range)
end


# Code benchmark
Benchmark.bm(5) do |bm|
  bm.report('V1: ') do
	difference_v1(1..100)    
  end
end

puts difference_v1(1..100)