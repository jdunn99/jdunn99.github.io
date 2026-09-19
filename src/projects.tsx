import Excel from "./components/icons/Excel";
// import JavaScript from "./components/icons/JavaScript";
import Matlab from "./components/icons/Matlab";
import Python from "./components/icons/Python";
// import Wix from "./components/icons/Wix";

const PROJECTS = [
	{
		title: "DecisionTrees.jl",
		github: "DecisionTrees.jl",
		link: "decision-trees",
		description:
			"A Julia implementation of CART decision trees, with cost-complexity pruning and cross-validation. Inspired by R's rpart library. Still an early work in progress. Supports basic tree building features (fitting, pruning, cross-validation, and prediction).",
		tools: [
			{
				title: "Julia",
			},
			{
				title: "Work in Progress",
			},
		],
	},
	{
		title: "Data Encryption Standard (DES) in Excel VBA",
		link: "des",
		github: "DES-in-VBA",
		description:
			"Created a custom VBA class to simulate bit operations, enabling spreadsheet encryption via DES. Built functions including 16-round subkey generation, expansion functions, S-Box substitutions, and file parsing modules for full encryption and decryption.",
		tools: [
			{
				title: "Excel",
				icon: <Excel />,
			},
			{
				title: "VBA",
			},
		],
		images: [
			"/credit_risk/default_rates.png",
			"/credit_risk/transition_matrix.png",
			"/credit_risk/steady_state.png",
		],
	},
	{
		title: "Credit Risk Analysis of a Corporate Bond Portfolio",
		link: "credit-risk",
		description:
			"Senior capstone mathematical modeling project. Calculated and used forward curves to price bonds across all S&P Global credit rating levels across various time horizons. Modeled and compared cumulative default rates for each rating across a 10-year period, implementing Credit Metrics Monte Carlo simulations with Markov models to forecast portfolio-level credit Value at Risk.",
		tools: [
			{
				title: "MATLAB",
				icon: <Matlab />,
			},
			{
				title: "Python",
				icon: <Python />,
			},
		],
	},
	// {
	// 	title: "Classifciation and Regression Trees in Julia",
	// 	description: "Coming Soon"
	// },
	// {
	// 	title: "Cheryl Zapata Art",
	// 	description: "Engineered a complete end-to-end web solution for an artist portfolio and e-commerce platform using Wix and custom JavaScript. Developed reusable custom components to elevate user experience and showcase artwork while driving traffic through search engine optimization.",
	// 	tools: [
	// 		{
	// 			title: "Wix",
	// 			icon: <Wix />
	// 		},
	// 		{
	// 			title: "JavaScript",
	// 			icon: <JavaScript />
	// 		},
	// 	]
	// }
];

export default PROJECTS;
