-- Set delimiter to $$ to define the trigger properly
DELIMITER $$

-- Create the trigger
CREATE TRIGGER after_order_insert
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
    -- Decrease the quantity of the item in the items table
    UPDATE items
    SET quantity = quantity - NEW.number
    WHERE name = NEW.item_name;
END $$

-- Restore the default delimiter
DELIMITER ;
