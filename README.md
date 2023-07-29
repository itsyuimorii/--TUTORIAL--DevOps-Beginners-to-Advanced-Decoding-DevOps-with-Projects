# Learn about CI CD & DevOps & the concepts of Continuous Integration, Continuous Delivery / Deployment, DevOps & pipeline

In this session, we delved into the concepts of Continuous Integration (CI), Continuous Delivery / Deployment (CD), DevOps, and the concept of a pipeline in software development.

**Continuous Integration (CI)** is a development practice that requires developers to frequently integrate their code into a shared repository. This integration triggers automated builds and tests to ensure code stability and identify issues early in the development process. CI allows for faster feedback and promotes collaboration among development teams.

**Continuous Delivery / Deployment (CD)** extends CI by automating the release process. With CD, any code changes that pass the automated tests are automatically deployed to production or made ready for release to customers. This ensures that software can be released quickly and reliably, reducing time-to-market.

**DevOps** is a cultural and organizational practice that encourages collaboration and communication between development and operations teams. It aims to break down silos and create a more efficient and reliable software development and deployment process. DevOps embraces automation, continuous feedback, and a focus on delivering value to end-users.

**Pipeline** in the context of software development refers to a set of automated processes and tools that enable code to move seamlessly from development to production. A typical pipeline includes steps such as code compilation, automated testing, artifact generation, and deployment to different environments.

By adopting CI, CD, and DevOps practices and setting up an efficient pipeline, organizations can accelerate software development cycles, reduce manual errors, improve collaboration, and deliver high-quality software to customers more rapidly and reliably. Embracing these concepts is crucial in today's fast-paced digital landscape, where software development and deployment need to be agile, responsive, and customer-centric.



## **Key Points: Old School Software Development Life Cycle**

1. **Product Management Team**:
   - Responsible for creating the product's feature roadmap through market and customer research.
   - Interacts closely with the software development team to present new feature requests or modifications to existing features.
2. **Software Development Team**:
   - Comprises a team of programmers responsible for developing various features.
   - Utilizes Git as the source code version control system, with all code stored in the source code repository.
3. **Build and Integration Team**:
   - Responsible for integrating code from all programmers, compiling it, and building a software package.
   - Delivers the built package along with documentation to the operations team.
4. **Quality Assurance Team**:
   - Ensures the software is tested for defects and that features function as expected.
   - Reports any identified defects back to the programmers.
5. **Operations Team**:
   - Upon approval from the quality assurance team, adopts the latest release package and deploys it to the production environment.
6. **Web Application Modules**:
   - High-level divisions: Customer Profiles, Product Catalog, and Order Tracking.
   - Each module has a separate programmer team, with code stored in version control repositories.
   - The build and integration team merges code from each module into a main branch and builds a deployable software package.
7. **Iterations**:
   - The entire software development life cycle is divided into iterations, with each iteration lasting from a few weeks to several months.
8. **Traditional Development Process**:
   - Before the advent of Continuous Integration, Continuous Delivery, and DevOps, software development typically followed this traditional approach.

##  Summary of Pain Points in Old School Integration:

- **Manual Code Integration**: Code integration from source code branches to the mainline branch occurs only once per iteration. Integration teams work extensively with representatives from each module team to integrate code into a single unit manually, which is time-consuming and error-prone.
- **Cross-Module Integration**: Code integration across modules happens at the end of the iteration, making it the only time for teams to check if their code works with code from other modules. If issues arise, it leads to significant rework, and late defect detection makes it challenging for developers to recall specific details related to defects.
- **Intermediate Code Merges:** Sometimes, intermediate code merges across branches may be necessary due to module dependencies. These merges can introduce problems like compilation errors, causing build breaks that delay development efforts.
- **Delayed Defect Detection:** Functional defects may go unnoticed for a long time, as they might not manifest as compilation errors and may only surface during application testing after code merges and integrations.
- **Lengthy Feedback Cycle:** Developers may have to wait for an extended period before getting feedback on their code's performance within the whole application, leading to long feedback cycles that hinder productivity.
- **Accumulative Impact:** The cumulative effect of manual integration, late defect detection, and long feedback cycles results in lengthy iterations, taking several weeks to months to complete. In today's fast-paced digital era, such prolonged development cycles are impractical, impeding business time-to-market.

## Bringing in Continuous Integration:

 To improve traditional development practices and move towards CI, several changes are necessary:

- **Centralized Source Code Repository:** All developers should use the `same source code repository,` promoting frequent code integrations into the mainline branch.

- **Automation:** Manual code integration is replaced with automation using a dedicated build server. Code compilation and testing are `triggered automatically` after each code commit.

- **Fast Feedback:** The entire build process, including compilation and testing, should be quick, taking no more than a few minutes. This allows `fast feedback` to developers about the success or failure of their code.

- **Automated Testing:** In addition to `code compilation, automated tests,` such as unit tests and UI tests, should be part of the build process. These tests ensure code correctness and quality.

- **Prioritizing Stability:** Developers should ensure that their code compiles correctly to maintain code stability. If a build fails, relevant developers should `prioritize fixing it to keep the codebase stable`.

By adopting these principles, organizations can establish Continuous Integration. CI is not merely about automated builds; it involves a new way of working for developers, aiming for fast and reliable feedback. Through CI, developers can address the pain points seen in the traditional development process, leading to a more efficient and `stable software development lifecycle`.

## Continuous Integration (CI) addresses the pain points of the traditional software development process:

1. **Manual and Time-Consuming Integration:** In the old school model, integration required significant time and effort and was prone to errors. In CI, integration is automated and fast.
2. **Late Discovery of Issues**: In traditional iterations, problems surfaced late. CI catches issues early because integration happens frequently.
3. **Hindered by Failed Merges:** In the old model, failed merges would hinder developers. In CI, developers prioritize fixing broken builds immediately after receiving notifications of failures.
4. **Shorter Feedback Cycle**: CI triggers builds with every code submission, running automated unit and UI tests. Immediate notifications of test failures allow developers to address issues promptly, improving the feedback cycle.
5. **Accumulative Efficiency:** CI's iterative and automated approach shortens development cycles, leading to faster product releases, critical in today's disruptive online markets.

In conclusion, CI significantly improves or rather disrupts the traditional software development process. It automates integration, catches issues early, prioritizes stability, shortens feedback cycles, and accelerates product releases. Next, the lecture will cover the other half - Continuous Delivery (CD), focusing on continuous deployment.

## Pipelines Explained

The purpose of this session is to clarify the concept of a pipeline, which is used in the context of Continuous Integration and Continuous Delivery (CI/CD).

- The term "pipeline" is a general concept used in various contexts.
- In the example of an automobile assembly line, the pipeline consists of three stages: body repair, engine repair, and paint.
- Each stage takes two hours to process one car, and the total time on the assembly line is six hours.
- With a 24-hour timeline, four cars can be assembled in a day on the current assembly line.
- In the context of CI/CD, a pipeline represents a series of automated steps for code changes from development to deployment.
- Pipelines play a crucial role in achieving Continuous Delivery (CD).
- In the next session, we will explore how pipelines are utilized in CI/CD for effective software development and deployment.

## Before Continuous Delivery came in - Old School Operations

Before Continuous Delivery came into the picture, the operations process followed an old-school model with manual deployment procedures. Let's explore the key points of this old-school operations process:

- Operations Team Receives Deployment Package: In the old-school model, the operations team receives a software deployment package that is ready for release. The package contains the application code and the necessary files for deployment.
- Installation Instructions: Along with the deployment package, the operations team receives installation instructions. These instructions guide the team on how to set up the application on different environments, such as testing and production.
- Preparing the Test Environment: The operations team follows the installation instructions to set up the testing environment. This environment should mimic the production environment but is used for testing purposes.
- Deploying to the Test Environment: Once the test environment is ready, the operations team deploys the application package to this environment.
- Quality Assurance Testing: The Quality Assurance (QA) team comes into action at this point. They perform testing on the deployed application in the test environment. If any defects are found, they are reported back to the development team, and the cycle repeats.
- Certification for Production: If no defects are found during testing, the QA team certifies the release as ready for production.
- Preparing the Production Environment: The operations team follows the installation instructions again, but this time for the production environment.
- Deploying to Production: The final step involves deploying the application package to the production environment. Once deployed, the new features become available to all users on the website.

## Pain Points of the Old-School Operations Model:

1. Manual Deployment: The process is manual, requiring the operations team to perform each step as per the instructions. This can be time-consuming and error-prone.
2. Potential for Errors: Due to manual intervention, there is a higher risk of human errors during the deployment process.
3. Delayed Feedback Loop: The feedback loop between QA and development is not as fast as in Continuous Delivery. Defects may not be discovered until the later stages of deployment, leading to delays and rework.
4. Limited Frequency of Deployments: The old-school model often limits deployments to specific release cycles, resulting in longer release cycles and slower time-to-market for new features.

## Bringing in Continuous Delivery

🔍 Continuous Delivery Definition: Continuous Delivery is a software development practice where code changes can be released to production at any time. The key is to always maintain a deployable state, ensuring the software is production-ready at all times.

🔄 Continuous Integration (CI) and CD Relationship: CD builds upon CI. In CI, developers continuously integrate their code into a shared repository, and automated builds are triggered at least once a day. This results in frequent generation of release packages. However, there are no installation instructions typically included, as the process is fully automated during CI.

⚙️ Automation in Operations: In the traditional old-school model, installation instructions were manual, leading to time-consuming and error-prone deployments. With CD, we leverage automation through scripts. Instead of manual steps, we create shell scripts (or PowerShell scripts for Windows) that execute all the necessary tasks for deployment.

🔄 The Release Pipeline: The CD process can be visualized as a release pipeline. It automates the steps from code integration, testing, to deployment. The release pipeline streamlines the delivery process and ensures a smooth workflow.

🚦 Manual Intervention: Though most tasks are automated in the release pipeline, there may be certain points requiring manual intervention. For instance, the quality assurance team checks the application in the testing environment before proceeding with deployment to production.

🏭 Continuous Deployment Clarification: Note that Continuous Delivery does not mandate fully automated releases; instead, it emphasizes the ability to deploy at any time. While many steps are automated, the final decision to release might still involve human intervention, such as certification and approval from stakeholders.

💨 Faster and Efficient Deployments: By adopting Continuous Delivery, we reduce the time and effort spent on deployments. It enables quick, efficient, and repeatable processes with minimal downtime.

🚀 Embracing Continuous Delivery: With Continuous Delivery, we keep our software production-ready at all times, empowering us to release at our discretion. The journey to modernizing our development practices is well underway!

## Continuous Delivery - Solving the pain points

1. Uncertain Instruction Accuracy: In the traditional model, the accuracy of instructions couldn't be guaranteed on CDs. However, with CD, instructions are transformed into automated scripts, allowing for validation during creation. Once created, the execution of these scripts becomes a repeatable process, ensuring consistency and accuracy.
2. Disparity in Environment Instructions: In the past, instructions for different environments often led to confusion. CD utilizes intelligent automation scripts that adapt to each environment's specific requirements, eliminating any ambiguity in installation instructions.
3. Manual Execution of Steps and Instructions: Relying on manual steps always poses the risk of errors. CD automates many tasks, reducing the chances of human errors during deployment. It streamlines the process and provides a reliable and automated way to execute each step.
4. Cumulative Effects on Speed: With Continuous Delivery, the release process becomes faster, enabling quicker product launches. This aligns perfectly with the demands of today's fast-paced and disruptive online markets.

## Maturing to Continuous Deployment

CD has significantly improved and disrupted the traditional software release process, leading to shorter release cycles and increased efficiency. Let's continue exploring CD in the next session, where we will elevate it to a higher level of maturity and see its continued evolution.

- Continuous Deployment (CD) takes CD to a higher level, automating the entire deployment process.

- The software development lifecycle supporting CI/CD involves mostly automated steps with some manual intervention.

- QA teams perform manual testing and acceptance testing in the Continuous Delivery phase, which can be automated.

- Automated user acceptance testing can replace manual testing, ensuring a more efficient process.

- Once all automated tests pass, the release package is automatically deployed to production without human intervention.

- Developers' code changes can be visible to global users within minutes if it passes automated tests.

- Limited permissions for code submissions and comprehensive automated test suites are crucial for a smooth CD process.

- Only enterprises with highly mature IT departments should consider Continuous Deployment due to associated risks.

- Continuous Deployment allows rapid and frequent releases, enhancing the speed of product delivery in the market.

- CD enables the possibility of continuous deployment, where code changes are continuously deployed to production without any manual intervention.

- CD represents both Continuous Delivery and Continuous Deployment, depending on the organization's level of automation and risk tolerance.

- Continuous Deployment allows granular control over deployments, enabling gradual rollouts and quick rollbacks in case of issues.

- Facebook releases an average of 50 product versions per day through CD, made possible by the CI/CD process.

  