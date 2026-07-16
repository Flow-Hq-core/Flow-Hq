import type { RNode } from "./businessRoadmap";

type RawNode = string | [string, RawNode[]];

function toNode(raw: RawNode): RNode {
  if (typeof raw === "string") return { label: raw, status: "pending" };
  const [label, children] = raw;
  return { label, status: "pending", children: children.map(toNode) };
}

function category(label: string, topics: RawNode[]): RNode {
  return { label, status: "pending", children: topics.map(toNode) };
}

export const dataEngineeringRoadmap: RNode[] = [
  category("Foundation", [
    ["Programming Foundations", ["Python Fundamentals", "Variables and Data Types", "Control Flow", "Functions", "Object-Oriented Programming", "Error Handling"]],
    ["Computer Science Fundamentals", ["Data Structures", "Algorithms", "Complexity Analysis", "Memory Management", "Networking Basics"]]
  ]),
  category("Database Foundations", [
    ["SQL Fundamentals", ["Relational Database Concepts", "Tables and Relationships", "JOIN Operations", "Window Functions", "Query Optimization"]],
    ["Database Systems", ["PostgreSQL", "MySQL", "Indexing", "Transactions", "Backup and Recovery"]]
  ]),
  category("Data Engineering Core", [
    ["Data Modeling", ["Star Schema", "Snowflake Schema", "Dimension Tables", "Data Vault"]],
    ["Data Warehousing", ["OLTP vs OLAP", "Enterprise Data Warehouse", "ETL vs ELT"]],
    ["ETL Development", ["Extracting Data", "Transforming Data", "Loading Data", "Incremental Loads", "Data Pipelines"]]
  ]),
  category("Data Pipelines", [
    ["Workflow Orchestration", ["Apache Airflow", "DAG Concepts", "Scheduling Jobs", "Pipeline Monitoring"]],
    ["Batch Processing", ["Batch Architecture", "Large File Processing", "Parallel Processing"]],
    ["Stream Processing", ["Real-Time Data Concepts", "Apache Kafka", "Consumers", "Stream Processing"]]
  ]),
  category("Cloud Data Engineering", [
    ["Cloud Fundamentals", ["Storage Services", "Compute Services", "Networking"]],
    ["AWS Data Engineering", ["S3", "Glue", "Athena", "Redshift"]],
    ["Google Cloud Data Engineering", ["Cloud Storage", "BigQuery", "Dataflow"]]
  ])
];
