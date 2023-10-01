// Sample JSON data for the cheat sheet with header, notes, and description
const mynotes = [
    {
        "header": "telnet",
        "notes": "how to connect : telnet <host_name> <port_num>",
        "description": "telnet, remote"
    },
    {
        "header": "Firewalls",
        "notes": "Firewalls are network security devices that filter incoming and outgoing traffic to protect a network from unauthorized access and threats.",
        "description": "Firewall, Network Security, Packet Filtering"
    },
    {
        "header": "Malware Types",
        "notes": "Common types of malware include viruses, worms, Trojans, ransomware, and spyware, each with unique characteristics and purposes.",
        "description": "Malware, Virus, Worm, Trojan, Ransomware, Spyware"
    },
    {
        "header": "Two-Factor Authentication (2FA)",
        "notes": "2FA adds an extra layer of security by requiring users to provide two different authentication factors, such as a password and a fingerprint, to access an account.",
        "description": "2FA, Authentication, Security"
    },
    {
        "header": "Zero-Day Vulnerabilities",
        "notes": "Zero-day vulnerabilities are software vulnerabilities that are exploited by hackers before a patch or fix becomes available, posing a significant threat.",
        "description": "Zero-Day, Vulnerabilities, Security Flaws"
    },
    {
        "header": "Cryptography",
        "notes": "Cryptography is the practice of securing information by converting it into a code, making it unreadable without the proper decryption key.",
        "description": "Cryptography, Encryption, Decryption"
    },
    {
        "header": "Penetration Testing",
        "notes": "Penetration testing is a proactive security measure where ethical hackers simulate cyberattacks to identify vulnerabilities in a system before malicious hackers do.",
        "description": "Penetration Testing, Ethical Hacking, Security Assessment"
    },
    {
        "header": "DDoS Attacks",
        "notes": "Distributed Denial of Service (DDoS) attacks overwhelm a target server or network with a flood of traffic, causing service disruptions.",
        "description": "DDoS, Cyberattacks, Traffic Overload"
    },
    {
        "header": "Network Segmentation",
        "notes": "Network segmentation involves dividing a network into smaller, isolated segments to limit lateral movement of attackers and improve security.",
        "description": "Network Segmentation, Security Zones, Isolation"
    },
    {
        "header": "Incident Response Plan",
        "notes": "An incident response plan outlines the steps to take when a security incident occurs, helping organizations mitigate damage and recover quickly.",
        "description": "Incident Response, Security Plan, Recovery"
    },
    {
        "header": "Social Engineering",
        "notes": "Social engineering attacks manipulate individuals into divulging confidential information through psychological manipulation and deception.",
        "description": "Social Engineering, Manipulation, Deception"
    },
    {
        "header": "Patch Management",
        "notes": "Patch management is the process of keeping software and systems up to date with the latest security patches to address known vulnerabilities.",
        "description": "Patch Management, Software Updates, Vulnerability Remediation"
    },
    {
        "header": "Antivirus Software",
        "notes": "Antivirus software detects and removes malicious software, such as viruses and malware, from a computer or network.",
        "description": "Antivirus, Malware Protection, Security Software"
    },
    {
        "header": "Encryption Algorithms",
        "notes": "Encryption algorithms like AES and RSA are used to protect data by converting it into a secure, unreadable format that can only be decrypted with the correct key.",
        "description": "Encryption, AES, RSA, Data Security"
    },
    {
        "header": "Security Awareness Training",
        "notes": "Security awareness training educates employees and users about cybersecurity best practices to reduce the risk of human errors and security breaches.",
        "description": "Security Awareness, Training, Employee Education"
    },
    {
        "header": "Blockchain Technology",
        "notes": "Blockchain technology provides a secure and tamper-proof way to record transactions, making it valuable for securing digital assets and data.",
        "description": "Blockchain, Cryptocurrency, Decentralization"
    },
    {
        "header": "Multi-factor Authentication (MFA)",
        "notes": "MFA adds an extra layer of security by requiring users to provide multiple forms of verification, such as a password and a one-time code from a mobile app.",
        "description": "MFA, Authentication, Security Layers"
    },
    {
        "header": "Security Incident Logging",
        "notes": "Security incident logs record events and activities on a network, helping organizations monitor for suspicious behavior and investigate security incidents.",
        "description": "Security Logging, Event Monitoring, Suspicious Activity"
    },
    {
        "header": "Ransomware Prevention",
        "notes": "Preventing ransomware attacks involves regular backups, user education, and security software to protect against file encryption and extortion.",
        "description": "Ransomware, Prevention, Backup Strategies"
    },
    {
        "header": "Endpoint Security",
        "notes": "Endpoint security solutions protect individual devices, like computers and smartphones, from cyber threats and ensure they adhere to security policies.",
        "description": "Endpoint Security, Device Protection, Security Policies"
    }
];


// Function to split the search input into individual keywords
function getKeywords() {
    const input = document.getElementById("search").value;
    return input.toLowerCase().split(",").map(keyword => keyword.trim());
}

// Function to check if a description contains all the keywords
function descriptionContainsKeywords(description, keywords) {
    return keywords.every(keyword => description.includes(keyword));
}

// Function to search the cheat sheet and display results as cards
function searchCheatSheet() {
    const keywords = getKeywords();
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    // Sort the data by description
    mynotes.sort((a, b) => a.description.localeCompare(b.description));

    for (const item of mynotes) {
        const header = item.header;
        const notes = item.notes;
        const description = item.description.toLowerCase();

        if (descriptionContainsKeywords(description, keywords)) {
            // Create a result card for each matching item
            const resultCard = document.createElement("div");
            resultCard.classList.add("result-card");

            const headerElement = document.createElement("h2");
            headerElement.innerText = header;

            const notesElement = document.createElement("p");
            notesElement.innerText = notes;

            const desElement = document.createElement("h3");
            desElement.innerText = description;

            // Append elements to the result card
            resultCard.appendChild(headerElement);
            resultCard.appendChild(notesElement);
            resultCard.appendChild(desElement);

            // Append the result card to the results container
            resultsContainer.appendChild(resultCard);
        }
    }

    // Display a message if no results were found
    if (resultsContainer.children.length === 0) {
        resultsContainer.innerText = "No results found.";
    }
}

// Initial population of the result cards
searchCheatSheet();

// Add an event listener to the search input for auto-search
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", searchCheatSheet);
