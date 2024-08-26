DELIMITER $$

CREATE PROCEDURE AddBonus(
IN user_id INTEGER,
IN project_name VARCHAR(255),
IN score INTIGER
)

BEGIN
INSERT INTO project(name)
SELECT project_name
FROM DUAL 
WHERE NOT EXISTS (
    SELECT *
    FROM project
    WHERE name = project_name
    LIMIT 1
)

INSERT INTO corrections(user_id, project_id, score)
VALUES(
    user_id,
    (SELECT id
    FROM project
    WHERE name = project_name),
    score
)
END $$


DELIMITER ;