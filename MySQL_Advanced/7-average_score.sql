-- Set the delimiter to $$ to avoid issues with semicolons

DELIMITER $$

CREATE PROCEDURE ComputeAverageScoreForUser(IN input_user_id INT)
BEGIN
    UPDATE users 
    SET average_score = (
        SELECT AVG(score)
        FROM corrections
        WHERE corrections.user_id = input_user_id
    )
    WHERE id = input_user_id;
END $$

DELIMITER ;
