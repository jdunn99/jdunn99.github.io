import Excel from './components/icons/Excel'
import JavaScript from './components/icons/JavaScript'
import Matlab from './components/icons/Matlab'
import Python from './components/icons/Python'
import Wix from './components/icons/Wix'

const PROJECTS = [
	{
		title: "Data Encrpytion Standard (DES) in Excel VBA",
		link: "des",
		github: "DES-in-VBA",
		description: "Created a custom VBA class to simulate bit operations, enabling spreadsheet encryption via DES. Built functions including 16-round subkey generation, expansion functions, S-Box substitutions, and file parsing modules for full encryption and decryption.",
		tools: [
			{
				title: "Excel",
				icon: <Excel />
			},
			{
				title: "VBA",
			},
			{
				title: "Cryptography"
			}
		],
		images: ["/credit_risk/default_rates.png", "/credit_risk/transition_matrix.png", "/credit_risk/steady_state.png"]
	},
	{
		title: "Credit Risk Analysis",
		description: "Senior capstone mathematical modeling project. Calculated and used forward curves to price bonds across all S&P Global credit rating levels across various time horizons. Modeled and compared cumulative default rates for each rating across a 10-year period, implementing Credit Metrics Monte Carlo simulations with Markov models to forecast portfolio-level credit Value at Risk.",
		tools: [
			{
				title: "MATLAB",
				icon: <Matlab />
			},
			{
				title: "Python",
				icon: <Python />
			},
			{
				title: "S&P Global"
			},
		]
	},
	// {
	// 	title: "Classifciation and Regression Trees in Julia",
	// 	description: "Coming Soon"
	// },
	{
		title: "Cheryl Zapata Art",
		description: "Engineered a complete end-to-end web solution for an artist portfolio and e-commerce platform using Wix and custom JavaScript. Developed reusable custom components to elevate user experience and showcase artwork while driving traffic through search engine optimization.",
		tools: [
			{
				title: "Wix",
				icon: <Wix />
			},
			{
				title: "JavaScript",
				icon: <JavaScript />
			},
			{
				title: "Google Developer Console"
			},
		]
	}
]

export default PROJECTS