
-------- ATTRITION & RETENTION ---------

USE hr_analytics;

DESCRIBE exit_details;

-- KPI 1 : Total Employee Exits
SELECT
    COUNT(ExitID) AS Total_Employee_Exits
FROM exit_details;

-- KPI 2: Voluntary Attrition Rate
SELECT
    ROUND(
        SUM(
            CASE
                WHEN ExitType = 'Voluntary' THEN 1
                ELSE 0
            END
        ) * 100.0 / COUNT(*),
        2
    ) AS Voluntary_Attrition_Percentage
FROM exit_details;

-- KPI 3: Overall Attrition Rate
SELECT
    ROUND(
        AVG(OverallAttritionRate) * 100,
        2
    ) AS Overall_Attrition_Percentage
FROM monthlyanalysis;

-- KPI 4: Regrettable Attrition Rate
SELECT
    ROUND(
        SUM(
            CASE
                WHEN RegrettableAttrition = 'Yes'
                THEN 1
                ELSE 0
            END
        ) * 100.0 / COUNT(*),
        2
    ) AS Regrettable_Attrition_Percentage
FROM exit_details;

-- Chart 1: Attrition by Department
DESCRIBE employees;
SELECT
    DepartmentID,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY DepartmentID
ORDER BY Total_Exits DESC;

-- Chart 2 : Attrition by Performance Rating
SELECT
    LastPerformanceRating AS Performance_Rating,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY LastPerformanceRating
ORDER BY LastPerformanceRating;

-- Chart 3 : Voluntary vs Involuntary Attrition
SELECT
    ExitType,
    COUNT(ExitID) AS Total_Exits,
    ROUND(
        COUNT(ExitID) * 100.0 /
        (SELECT COUNT(*) FROM exit_details),
        2
    ) AS Exit_Percentage
FROM exit_details
GROUP BY ExitType;

-- Chart 4 : Attrition by Month
DESCRIBE monthlyanalysis;
SELECT *
FROM monthlyanalysis
LIMIT 5;
SELECT
    `Month`,
    ROUND(OverallAttritionRate * 100, 2)
        AS Attrition_Percentage
FROM `monthlyanalysis`
ORDER BY `Month`;

-- Chart 5 : Attrition by Tenure Band
DESCRIBE employees;
SELECT
    ROUND(AVG(TenureYear), 2)
        AS Average_Tenure_Years
FROM exit_details;

-- Chart 6 : Top 5 Reasons for Exit
SELECT
    ExitReason,
    COUNT(ExitID) AS Total_Exits,
    ROUND(
        COUNT(ExitID) * 100.0 /
        (SELECT COUNT(*) FROM exit_details),
        2
    ) AS Exit_Percentage
FROM exit_details
GROUP BY ExitReason
ORDER BY Total_Exits DESC
LIMIT 5;

-- Gender-wise Attrition
DESCRIBE employees;
SELECT
    e.Gender,
    COUNT(d.ExitID) AS Total_Exits
FROM exit_details d
JOIN employees e
    ON d.EmployeeID = e.EmployeeID
GROUP BY e.Gender;

-- Department-wise Attrition
SELECT
    DepartmentID,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY DepartmentID
ORDER BY Total_Exits DESC;

-- Region-wise Attrition
DESCRIBE exit_details;
SELECT
    `Dim_Location.Region` AS Region,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY `Dim_Location.Region`
ORDER BY Total_Exits DESC;

-- Exit Type Analysis
SELECT
    ExitType,
    COUNT(ExitID) AS Total_Exits,
    ROUND(
        COUNT(ExitID) * 100.0 /
        (SELECT COUNT(*) FROM exit_details),
        2
    ) AS Exit_Percentage
FROM exit_details
GROUP BY ExitType;

-- Month-wise Employee Exits
SELECT
    ExitYear,
    ExitMonth,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY ExitYear, ExitMonth
ORDER BY ExitYear, ExitMonth;

-- Month-over-Month Exit Analysis (MoM)
SELECT
    `Month`,
    TotalExit,
    `ExitsMoM%` AS Exit_MoM_Percentage,
    `OverallRate MoM%` AS Attrition_MoM_Percentage
FROM monthlyanalysis
ORDER BY `Month`;

-- Gender-wise Voluntary and Involuntary Exits
SELECT
    Gender,
    ExitType,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY Gender, ExitType
ORDER BY Gender, ExitType;

-- Department-wise Exit Type Analysis
SELECT
    Department,
    ExitType,
    COUNT(ExitID) AS Total_Exits
FROM exit_details
GROUP BY Department, ExitType
ORDER BY Department, ExitType;




















