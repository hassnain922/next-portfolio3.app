'use client'
import React from 'react'
import CustomButton from "@/components/CustomButton";

const Services = () => {
      const handleScroll = () => {
   
      }
  return (
   <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
        <div className='flex-1 pt-16 padding-x'>
          <h2 className='hero__title'>Deal in the Following Services</h2>
            <h3 className='text-2xl'>Here are some of the services provided by a DevOps engineer:</h3>
     
      <p  className ="hero__subtitle"> 
      Continuous Integration and Deployment: DevOps engineers establish and manage continuous integration and deployment pipelines. They automate the build, test, and deployment processes, ensuring that software changes are regularly and reliably delivered to production environments. 
      
      <CustomButton
          title="read more ..."
          containerStyles=" bg-indigo-900  text-2xl text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </p>
     <p className ="hero__subtitle">
      Infrastructure Automation: DevOps engineers use tools like configuration management and infrastructure-as-code (IaC) to automate the provisioning, configuration, and management of infrastructure resources. They work with technologies like Docker, Kubernetes, and cloud platforms to create scalable and resilient environments.</p>
     <p className ="hero__subtitle">
      Monitoring and Alerting: DevOps engineers set up monitoring systems to track the performance and health of applications and infrastructure. They configure alerts to notify relevant teams in case of any issues or anomalies, allowing for timely responses and proactive problem-solving.</p>
     <p className ="hero__subtitle">
      Performance Optimization: DevOps engineers identify bottlenecks and optimize system performance. They analyze resource utilization, conduct load testing, and fine-tune configurations to improve the overall efficiency and scalability of the software systems.</p>
    <p className ="hero__subtitle">
      Security and Compliance: DevOps engineers collaborate with security teams to implement secure development practices. They ensure that appropriate security measures, such as access controls, vulnerability scanning, and secure deployments, are integrated into the DevOps processes. They also assist in compliance with relevant regulations and standards.</p>
    <p className ="hero__subtitle">
      Collaboration and Communication: DevOps engineers promote collaboration and communication between development, operations, and other cross-functional teams. They facilitate the adoption of collaborative tools, such as version control systems, issue tracking systems, and communication platforms, to enable effective teamwork.</p>
     <p className ="hero__subtitle">
      Incident Response and Troubleshooting: DevOps engineers play a crucial role in incident response and troubleshooting. They investigate production incidents, diagnose problems, and implement solutions to prevent future occurrences. They may also participate in on-call rotations to provide support during critical incidents.</p>
      <p className ="hero__subtitle">
      Continuous Improvement: DevOps engineers drive continuous improvement by analyzing metrics, gathering feedback, and implementing process enhancements. They advocate for best practices, evaluate new tools and technologies, and propose optimizations to streamline and enhance the 
      software delivery lifecycle.</p>
      </div>
  </div>
    )
}

export default Services