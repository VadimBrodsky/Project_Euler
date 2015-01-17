require 'benchmark'
require 'rational'

def divisible?(number, range)
  divisible_flag = false
  range.each do |i|
    if number % i != 0
      return false
    else
      divisible_flag = true
    end
  end
  return divisible_flag
end

# Brute Force Method
def smallest_divisible_by_all_v1(range)
  found = false
  index = 1
  while !found do
    if divisible?(index, range)
      found = true
    else
      index = index.next
    end
  end

  return index
end

# Using Least Common Multiple Method
def smallest_divisible_by_all_v2(range)
  return (range).inject(1) do |result, n| 
    result.lcm n
  end
end



# Code benchmark
Benchmark.bm(5) do |bm|
  bm.report('V1: ') do
    smallest_divisible_by_all_v1(1..20)
  end

  bm.report('V2: ') do
    smallest_divisible_by_all_v2(1..20)
  end
end

puts smallest_divisible_by_all_v1(1..20)
puts smallest_divisible_by_all_v2(1..20)