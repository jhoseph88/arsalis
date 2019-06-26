export const contactFormDefaults = {
  formIsValid: false,
  formIsSubmitted: false,
  formControls: {
    name: {
      value: '',
      valid: false,
      validationRules: {
        minLength: 2,
        isRequired: true
      },
      touched: false
    },
    email: {
      value: '',
      valid: false,
      validationRules: {
        isRequired: true,
        isEmail: true
      },
      touched: false
    },
    message: {
      value: '',
      valid: false,
      validationRules: {
        minLength: 3,
        isRequired: true
      },
      touched: false
    }
  }
}

export const about = {
  mission: "We are committed to providing elegant, contemporary, affordable software solutions to those who have yet to hop on the tech bandwagon. We believe cloud computing lowers the barrier of entry for smaller organizations who lack the capital or the expertise to hire a full-time engineering team.",
  values: "We believe in getting to know our clients as individuals is a key prerequisite to building for them products they can understand, take pride in, and love. We see the ability to explain our systems to a less technical audience than us as part of the definition of a quality finished product.",
  background: "We are a small team of colleagues and friends who have come together under the common mission of sharing world-class technical systems with regular people like us. We have worked full-time for Fortune 500 companies in fields including financial technology, healthcare, insurance, eCommerce, marketing, and small business. As technologists who have surveyed the state-of-the-art, we are prepared to bring to you years of hard-earned experience as well as a commitment to stay up-to-date on the bleeding edge of scale, affordability, and simplicity.",
}

export const services = {
  web: "Whether you are looking to expand, update, or redefine your online presence, we will work closely and diligently with you to understand your goals and aspirations before writing a single line of code. Our aim is to help you along in your journey of building a web site or service which you feel represents your personality and values. Whether it's an internal tool or a customer-facing web app, we will apply the most elegant, cutting-edge technologies in our toolkit to deliver applications tailor-made to your needs.",
  cloud: "The cloud computing revolution has allowed tiny start-ups and multi-national corporations alike to scale their computing and storage infrastructures on an as-needed basis. We are excited to help you strategize and implement cloud systems which will jumpstart your business while saving you time and money.",
  mobile: "If a mobile-friendly website doesn't cover your business requirements, we would be happy to build you a contemporary, cross-platform mobile application. Tools like React Native and Flutter align best with our philosphy of simplicity, ease-of-use, and cross-platform functionality. However, we are flexible when it comes to languages and frameworks. Fundamentally, we are here to serve you, and we are open to leveraging any technologies which will fit your use case.",
  data: "Data is the currency of the twenty-first century. We understand that parlaying your organization's data is a vital component to a healthy tech-literate business. We are here to help you store, organize, transform, and analyze your data affordably, efficiently, and ethically in a secure cloud environment.",
  devops: "Let us help you automate your tedious system administration tasks so you can spend your precious time getting work done, not maintaining fragile configurations. We will provide you with infrastructure as code which will help you maintain a clean, efficient, and modular cloud environment. Want to move to a DevOps or YBYO paradigm? We will provide training and best practices to put you on the same page with the industry leaders in automation."
}
