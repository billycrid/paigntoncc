export const FantasyLeaguePromo = () => {
    const styles = {
        container: {
            margin: "0 auto",
            padding: "0px 20px 0px 20px",
            color: "#222",
            lineHeight: "1.6",
        },
        heading: {
            color: "#c20000",
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "16px",
            textAlign: 'center' as const
        },
        linkBig: {
            color: "#c20000",
            fontWeight: "bold",
            textDecoration: "none",
            textAlign:'center' as const
        },
        link: {
            color: "#c20000",
            fontWeight: "bold",
            textDecoration: "none",
        },
        sectionTitle: {
            fontSize: "18px",
            fontWeight: "bold",
            marginTop: "24px",
            marginBottom: "8px",
        },
        list: {
            paddingLeft: "20px",
            marginBottom: "20px",
        },
        listItem: {
            marginBottom: "6px",
        },
    };

    const fantasyLeagueUrl = 'https://paignton.fantasyclubcricket.co.uk/';

    return (
        <div style={styles.container}>
            <a
                    href={fantasyLeagueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.linkBig}
                ><div>
                    <h2 style={styles.heading}>
                🎉 Join the Paignton Cricket Club Fantasy League! 🏏
            </h2><img src="/images/fantasy.png" style={{maxHeight: '250px'}} />
                    </div></a>
            
            <p>Think you know your cricket? Prove it!</p>

            <p>
                The <strong>Paignton CC Fantasy Cricket League</strong> is now open to{" "}
                <strong>EVERYONE</strong> — not just club members. Whether you're a die-hard fan,
                a family member, or just love a bit of competition, you're invited to build your team and take on the rest!
            </p>

            <p>
                👉{" "}
                <a
                    href={fantasyLeagueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.link}
                >
                    Sign up here
                </a>
            </p>

            <p>
                💻 All player values have been set using AI based on two seasons of real performance stats —
                no bias, no guesswork, just data-driven cricketing logic.
            </p>

            <p>
                💷 <strong>Entry is just £10</strong>, with cash prizes for the top 3 finishers at the end of the season!
            </p>

            <h3 style={styles.sectionTitle}>🏆 Prize Breakdown:</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>🥇 1st Place – 50% of the prize pot</li>
                <li style={styles.listItem}>🥈 2nd Place – 30%</li>
                <li style={styles.listItem}>🥉 3rd Place – 20%</li>
            </ul>

            <p>
                It’s competitive, it’s fun, and it’s a great way to follow the season —
                whether you're pitch-side or online.
            </p>

            <p>
                🎯 Get picking wisely — and good luck to everyone! Let’s have a great competition this year! 🍀
            </p>
            <br/>
        </div>
    );
};