
inductive Vect (α : Type u) : Nat → Type u where
   | nil : Vect α 0
   | cons : α → Vect α n → Vect α (n + 1)

def Nat.plusL : Nat → Nat → Nat
  | 0, k => k
  | n + 1, k => plusL n k + 1

def appendL : Vect α n → Vect α k → Vect α (n.plusL k)
  | .nil, ys => ys
  | .cons x xs, ys => .cons x (appendL xs ys)

def zero: Vect Nat 0 := Vect.nil
--        ----------    --------
--           type        value

def one: Vect Nat 1 := Vect.cons 0 zero
--       ----------    ----------------
--          type              value

def two: Vect Nat 2 := Vect.cons 0 one
--       ----------    ---------------
--          type             value

def three: Vect Nat 3 := Vect.cons 0 two
--         ----------    ---------------
--            type             value
