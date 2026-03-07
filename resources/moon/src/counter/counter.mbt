struct Counter {
  mut count: Int
}

pub fn Counter::counter_new() -> Counter {
  { count: 0 }
}

pub fn Counter::counter_get(self: Counter) -> Int {
  self.count
}

pub fn Counter::counter_increment(self: Counter) -> Unit {
  self.count = self.count + 1
}

pub fn Counter::counter_decrement(self: Counter) -> Unit {
  self.count = self.count - 1
}
