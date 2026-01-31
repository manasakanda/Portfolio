import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpeg";
import project6 from "../assets/projects/project-6.jpeg";
import project7 from "../assets/projects/project-7.jpeg";
import project8 from "../assets/projects/project-8.jpeg";
import project9 from "../assets/projects/project-9.jpeg";
import project10 from "../assets/projects/project-10.jpeg";
import project11 from "../assets/projects/project-11.jpeg";
import project12 from "../assets/projects/project-12.jpeg";

export const HERO_CONTENT = `I am a passionate Data Engineer with expertise in building scalable ETL pipelines and delivering real-time, high-quality data solutions. With hands-on experience at Chubb Business Services and a strong foundation in Databricks, PySpark, Azure Synapse, and SQL, I specialize in optimizing data models, ensuring SLA alignment, and enabling data-driven decision-making. I hold a B.Tech in Computer Science with specialization in AI and ML from VNR Vignan Jyothi Institute of Engineering and Technology. My goal is to craft robust, scalable data solutions that solve real-world problems and drive operational excellence.`;

export const ABOUT_TEXT = `I am a dedicated Data Engineer with full-time experience at Chubb Business Services India, where I deliver scalable ETL pipelines and maintain data integrity for global reporting platforms. With expertise in Databricks, PySpark, Azure Synapse Analytics, and SQL, I specialize in designing optimized data ingestion workflows, implementing Slowly Changing Dimensions, and enhancing data quality through automated validation. I am passionate about building high-performance data solutions, collaborating across cross-functional teams, and ensuring operational excellence with SLA compliance. I hold a B.Tech in Computer Science with specialization in AI and ML from VNR Vignan Jyothi Institute of Engineering and Technology. Beyond my professional work, I am deeply committed to knowledge management, mentoring, and staying at the forefront of data engineering innovations. I am excited to continue solving challenging data problems and contributing to impactful solutions.`;

export const EXPERIENCES = [
  {
    year: "JUNE 2024 - PRESENT",
    role: "Data Engineer",
    company: "Chubb Business Services India",
    description: `Delivering scalable ETL pipelines using Databricks, PySpark, Azure Synapse Analytics, and SQL to support global reporting platforms and business analytics needs. Designed and optimized data ingestion workflows for large-scale structured and semi-structured (JSON) datasets, enabling real-time, analysis-ready datasets across multi-region environments (NA, EMEA, LATAM). Implemented Slowly Changing Dimensions (SCD) Type 0, 1, and 2 methodologies to maintain historical data integrity and support dynamic business reporting. Spearheaded ownership of North America (NA) region data pipelines — leading architecture, development, deployment, and production support while ensuring SLA compliance and operational excellence. Enhanced data quality by developing automated validation scripts and implementing standardized quality checks, improving reporting data accuracy by 15%. Modeled relational and analytical datasets into highly optimized structures, improving query performance. Built and automated incremental data load pipelines, achieving 10-15% improvement in data processing efficiency.`,
    technologies: ["Databricks", "PySpark", "Azure Synapse Analytics", "Azure Data Factory", "SQL", "Python", "JSON", "ETL", "Data Modeling", "SCD"],
  },
  {
    year: "SEPT 2023 - JUNE 2024",
    role: "Data Engineer Intern",
    company: "Chubb Business Services India",
    description: `Gained hands-on experience in ETL development and data pipeline optimization at Chubb Business Services. Worked with Databricks, PySpark, and Azure technologies to support data ingestion and transformation workflows. Contributed to data modeling and quality validation initiatives, supporting the development of analysis-ready datasets for global reporting platforms. Collaborated with cross-functional teams to gather requirements and implement scalable data solutions aligned with business priorities.`,
    technologies: ["Databricks", "PySpark", "Azure", "SQL", "Python", "ETL", "Data Modeling"],
  },
];

export const PROJECTS = [
  {
    title: "Multi-Region ETL Pipeline - Chubb",
    image: project5,
    description:
      "Designed and implemented scalable ETL pipelines using Databricks and PySpark to process large-scale structured and semi-structured (JSON) datasets across North America, EMEA, and LATAM regions. Built data ingestion workflows that support real-time, analysis-ready datasets for global reporting platforms. Implemented automated incremental data load mechanisms, achieving 10-15% improvement in data processing efficiency. Leveraged Azure Synapse Analytics for data warehouse operations and SQL for complex transformations.",
    technologies: ["Databricks", "PySpark", "Azure Synapse", "Python", "SQL", "JSON", "ETL", "Data Pipelines"],
  },
  {
    title: "Slowly Changing Dimensions (SCD) Implementation",
    image: project6,
    description:
      "Architected and implemented SCD Type 0, 1, and 2 methodologies to maintain historical data integrity and support dynamic business reporting at Chubb. Developed data models that track temporal changes in dimensions while optimizing query performance. Created robust validation scripts to ensure data accuracy and consistency across warehouse tables. Enhanced reporting capabilities by enabling trend analysis and historical comparisons across multiple time periods.",
    technologies: ["SQL", "PySpark", "Data Modeling", "Databricks", "Azure Data Factory"],
  },
  {
    title: "Data Quality Automation Framework",
    image: project7,
    description:
      "Developed comprehensive automated data quality validation framework using Python and PySpark to enhance reporting data accuracy by 15%. Implemented standardized quality checks including null value detection, referential integrity validation, and business rule enforcement. Built monitoring dashboards and alert systems to detect data anomalies in real-time. Integrated validation logic into ETL pipelines to ensure data integrity at ingestion stages.",
    technologies: ["Python", "PySpark", "SQL", "Data Validation", "Databricks", "Monitoring"],
  },
  {
    title: "Real-Time Analytics Data Lake",
    image: project8,
    description:
      "Engineered a scalable data lake architecture on Azure supporting real-time analytics and business intelligence. Designed optimized data ingestion workflows for multi-source data collection. Implemented medallion architecture (bronze, silver, gold layers) using Databricks Delta for data governance and ACID transactions. Enabled stakeholders to access near real-time insights through optimized analytical datasets. Achieved significant performance improvements for ad-hoc queries and reporting.",
    technologies: ["Databricks", "Delta Lake", "Azure", "PySpark", "SQL", "Analytics"],
  },
  {
    title: "Data Warehouse Schema Design",
    image: project9,
    description:
      "Designed and optimized relational and analytical data warehouse schemas supporting complex business reporting requirements. Implemented star schema and fact/dimension table structures for efficient OLAP operations. Optimized data models for improved query performance and reduced storage costs. Created comprehensive data dictionaries and documentation for enterprise data governance. Collaborated with analytics teams to align schema design with business metrics and KPIs.",
    technologies: ["SQL", "Data Modeling", "Azure Synapse", "Database Design", "Star Schema"],
  },
  {
    title: "SCD Type Implementation & Historical Tracking",
    image: project10,
    description:
      "Implemented advanced Slowly Changing Dimension techniques to capture and maintain historical changes in master data. Developed efficient change detection mechanisms using hash-based comparison and incremental load patterns. Built time-series dimensions with valid-from/valid-to date tracking for temporal analysis. Enabled accurate historical reporting and trend analysis across business dimensions.",
    technologies: ["SQL", "PySpark", "Data Modeling", "Databricks", "Python"],
  },
  {
    title: "ETL Performance Optimization",
    image: project11,
    description:
      "Optimized existing ETL pipelines to reduce execution time and resource consumption. Analyzed query execution plans and identified bottlenecks in data transformation logic. Implemented parallel processing strategies and optimized joins to leverage Spark's distributed computing capabilities. Achieved 10-15% improvement in pipeline efficiency while maintaining data quality standards. Documented optimization techniques for team knowledge sharing.",
    technologies: ["PySpark", "SQL Optimization", "Databricks", "Performance Tuning", "Azure"],
  },
  {
    title: "Data Integration & Transformation Framework",
    image: project12,
    description:
      "Built reusable data integration framework for heterogeneous data source connectivity and transformation. Developed generic transformation templates supporting common data cleansing and enrichment patterns. Implemented error handling and data quality checks within transformation logic. Created configuration-driven ETL jobs to minimize development time for new data sources. Standardized transformation logic across the platform for maintainability and consistency.",
    technologies: ["Python", "PySpark", "SQL", "ETL", "Data Integration", "Databricks"],
  },
];

export const CONTACT = {
  address: "Hyderabad, India",
  phoneNo: "+91-7702536925",
  email: "manasakanda08@gmail.com",
  linkedin: "linkedin.com/in/manasa-kanda",
  github: "https://github.com/manasakanda",
};
