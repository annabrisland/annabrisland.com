import { Typography, Row, Col, Image } from "antd";
import { useEffect } from "react";
import "./index.css";
import rnaFlow from "../../images/rnaFlow.png";
import fastqc from "../../images/fastqc.png";
import bbduk from "../../images/bbduk.png";
import deseq from "../../images/deseq.png";
import deseq2 from "../../images/deseq2.png";
import DateText from "../../components/DateText";


export default function DNA() {
  const { Title, Text } = Typography;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Row
      className="Appdna slidedna"
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "row",
        paddingBottom: "5%",
      }}
    >
      <Col style={{ flex: 1 }}>
        <Row style={{ flex: 1, flexDirection: 'column', height: '100vh', alignSelf: 'center', backgroundColor: "#1B4E6B", paddingTop: "5%", paddingLeft: "5%", paddingRight: "5%" }}>
          {DateText("May 2021", "#FFFFFF")}
          <Row justify="center" style={{ marginTop: '15vh' }}>
            <Title
              className="title"
              style={{
                color: "#FFFFFF",
                fontSize: 70,
                fontFamily: "Araboto-Normal",
                marginBottom: 0,
              }}
            >
              Building a RNA-Seq Pipeline
            </Title>
          </Row>
          <Row justify="center">
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
              }}
            >
              Computational Biology
            </Text>
          </Row>
        </Row>
        <Row style={{ flex: 1, paddingLeft: "5%", paddingRight: "5%", paddingTop: "5%", paddingBottom: "2%" }}>

          <Row justify="start">
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
                marginBottom: 30,
              }}
            >
              Why is this pipeline important?
            </Title>
          </Row>
          <Row justify="center">
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                textAlign: "start",
                marginBottom: 20,
              }}
            >
              Sequencing of RNA samples allows us to gain insight into the transcriptome and transcriptional changes between conditions. With this new knowledge, it is easier to target specific genes of interest for further analysis. However, after most next-generation sequencing techniques, raw data needs to be preprocessed before drawing any biological conclusions. We have developed and implemented the following RNA-Seq processing pipeline to return the most valuable data.


            </Text>
          </Row>
          <Row justify="center" style={{ paddingTop: "5%" }}>
            <Image
              width={"80%"}
              src={rnaFlow}
              style={{ objectFit: "cover", marginBottom: 20 }}
              preview={false}
            />
          </Row>
          <Row>
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
                marginBottom: 30,
              }}
            >
              Using <Text style={{ fontWeight: "3000" }}> FastQC </Text> to assess read quality
            </Title>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                textAlign: "start",
                marginBottom: 20,
              }}
            >
              To begin processing the reads, we first implement FastQC. FastQC is a tool that provides simple quality control checks for high throughput data. We input our raw sequenced reads in the form of a ‘.fastq’ file and receive a quality control (QC) report to alert to any problems in the sequencing or the library sample preparation itself. In the returned report, plots are given to represent percentage adapter content in the reads, per base sequence quality, and per sequence GC content.

            </Text>
          </Row>
          <Row justify="center">
            <Image
              width={"80%"}
              src={fastqc}
              style={{ objectFit: "cover", marginBottom: 20 }}
              preview={false}
            />
          </Row>
          <Row>
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
                marginBottom: 30,
              }}
            >
              Trimming adapter sequences with BBDuk
            </Title>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                textAlign: "start",
                marginBottom: 20,
              }}
            >
              After assessing the quality of the raw reads, BBDuk is run on the same ‘.fastq’ files to remove any remaining adapter sequences. BBDuk is a fast and efficient tool that uses k-mers (substrings of nucleotide sequences) to evaluate which sequences are non-organism specific for removal. In our pipeline, we provide BBDuk with a library of adapter sequences from Illumina that may be identified in our reads. In the BBDuk command, we specify our k-mer size to be 23 (k=23). This size is chosen to be at least the length of our adapter sequences that will be trimmed.
              After trimming adapter sequences it is advisable to re-run FastQC on the trimmed read files to ensure all foreign sequences have been removed.

            </Text>
          </Row>
          <Row justify="center">
            <Image
              width={"80%"}
              src={bbduk}
              style={{ objectFit: "cover", marginBottom: 20 }}
              preview={false}
            />
          </Row>
          <Row>
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
                marginBottom: 30,
              }}
            >
              STAR alignment of reads to a reference genome
            </Title>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                textAlign: "start",
                marginBottom: 20,
              }}
            >
              Once the reads have been preprocessed, trimmed reads can be aligned to the reference genome. STAR is a splice-aware genome mapping tool which takes into account non-contiguous exons when searching recovered RNA sequences against the reference genome. STAR alignment outputs raw gene counts. Organism specific reference genomes for C. neoformans and Ustilago maydis are the CNA3 assembly with 11.8X coverage and the Umaydis521_2.0 assembly with 10X coverage.
            </Text>
          </Row>
          <Row>
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
                marginBottom: 30,
              }}
            >
              Analysing gene-level differential expression with DESeq2
            </Title>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                textAlign: "start",
                marginBottom: 20,
              }}
            >
              Gene counts from the alignment can then be used to make comparisons between different samples across experimental conditions. DESeq2, an R package from the Bioconductor library, normalises counts through a ‘median of ratios’ considering RNA composition and sequencing quality, and analyses differential expression of count data (Anders et al. 2010). DESeq outputs a file containing expression values for each sample comparison and a spreadsheet of genes and their corresponding log2fold change, p-value and adjusted p-value. In this context, the p-value can be interpreted as the probability of a difference in gene expression between groups (Love et al. 2014). Using this output, principle component analysis (PCA) can be carried out to depict clustering of samples based on similarity of expression. MA plots can be used to visually represent differences in sample measurements and Volcano plots demonstrate the statistical significance as well as the differential expression of genes.
            </Text>
          </Row>
          <Row justify="center" style={{ paddingTop: "5%" }}>
            <Image
              width={"100%"}
              src={deseq}
              style={{ objectFit: "cover", marginBottom: 5 }}
              preview={false}
            />
          </Row>
          <Row style={{ flex: 1, paddingTop: "5%" }}>
            <Col style={{ flex: 1 }}>
              <Image
                width={"100%"}
                src={deseq2}
                style={{ objectFit: "cover", marginBottom: 20 }}
                preview={false}
              />
            </Col>
            <Col style={{ flex: 1, height: "100%", alignItems: "center" }}>
              <Row align="middle" style={{ height: '100%' }}>
                <Text
                  style={{
                    flex: 1,
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Araboto-Normal",
                    fontStyle: "italic",
                  }}
                >(A) Example PCA plot to show similarity of sample expression (B) Example MA plot showing differences in sample expression with points representing individual genes (C) Example Volcano plot showing statistical significance of differentially expressed genes
                </Text>
              </Row>
            </Col>
          </Row>
          <Row>
            <Title
              className="title"
              style={{
                color: "black",
                fontSize: 50,
                fontFamily: "Araboto-Normal",
                marginBottom: 30,
              }}
            >
              Gene Set Enrichment Analysis (GSEA)
            </Title>
            <Text
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Araboto-Normal",
                textAlign: "start",
                marginBottom: 20,
              }}
            >
              To gain further understanding of differences between phenotypes at a gene-set level, GSEA enables the identification of interesting pathways and networks (Subramanian et al. 2005) (Mootha et al. 2003). GSEA computes gene sets which are statistically significantly over-represented in expression data. The gene sets used are pre-defined lists of genes which are known to function together to perform specific biological functions and can be compiled from gene annotation databases such as GO and KEGG databases. In our pipeline, we sourced pathway information with terms falling under “biological processes” from gprofiler in the form of ‘.gmt’ files. GSEA uses a ‘ranked list’ to recognise which genes have a greater impact on the overall pathway with additive effect - the addition of subtle differential expression may provide greater impacts. Through using rank, GSEA is less biased than other gene ontology analyses, as all genes are used in analysis and a gene list is not described by an arbitrary cutoff. Rank score is calculated through the equation: sign(log2FoldChange)*-log10(p-value). This increases the strength of GSEA analysis as it takes into account both log2Fold change and p-value when investigating probable enriched pathways.
            </Text>
          </Row>
        </Row>
      </Col>
    </Row>
  );
}
